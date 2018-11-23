/* eslint-disable no-unused-vars */
import Papa from 'papaparse'
import download from 'downloadjs'
import { h, app } from 'hyperapp'
import { priceIndex, priceIndexMonths } from './constants/price-index'
import './styles/app.scss'
import 'milligram'

const formatPrice = (price) => {
  price = Math.round(price)
  return price.toLocaleString('sv-SE')
}

const state = {
  rows: [],
  year: 2018
}

const priceToday = (finalyear, year, price) => {
  return (priceIndex[finalyear] / priceIndex[year]) * price
}

const actions = {
  set: x => x,

  addRows: (results) => (state, actions) => {
    let data = results.data[0]
    let year = data[0]
    let price = +data[1]
    if (year && price) {
      actions.set({
        rows: state.rows.concat({
          year: year,
          price: price
        })
      })
    }
  },

  downloadCSVFile: (e) => (state, actions) => {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
    download(Papa.unparse(state.rows, {
      delimiter: ';'
    }), 'converted.csv', 'text/csv')
  },

  parseCSV: (csv) => (state, actions) => {
    actions.set({
      rows: []
    })
    Papa.parse(csv.data, {
      download: csv.isFile,
      header: false,
      step: (results) => {
        actions.addRows(results)
      },
      complete: () => {
        console.log('finsihed')
      }
    })
  },

  parseFile: (e) => (state, actions) => {
    actions.parseCSV({ data: e.target.files[0], isFile: true })
  },

  parseString: (e) => (state, actions) => {
    actions.parseCSV({ data: e.target.value })
  }
}

const view = (state, actions) => (
  h('main', {
    class: 'wrapper'
  }, [
    h('nav', {
      class: 'navigation'
    }, [
      h('section', {
        class: 'container'
      }, [
        h('h1', {
          class: 'title'
        }, 'Prisomräknare')
      ])
    ]),
    h('div', {
      class: 'content container'
    }, [
      h('p', {}, 'Här kan du konvertera längre serier med historiska priser, du kan välja mellan att ladda upp en .csv med tabelldata i ett format där de två första kolumnerna är [år], [pris]. Eller att klistra in den i textrutan nedan. Efter konvertering kan du ladda ned en .csv med resultatet.'),
      h('p', {}, [
        h('span', {}, 'Datan kommer från '),
        h('a', {
          href: 'https://www.scb.se/hitta-statistik/sverige-i-siffror/prisomraknaren/'
        }, 'SCB:s prisomräknare'),
        h('br', {}),
        h('span', {}, 'Du kan kontakta mig på twitter om du har några frågor '),
        h('a', {
          href: 'https://twitter.com/marcusasplund'
        }, '@marcusasplund'),
        h('br', {}),
        h('span', {}, 'Här finns en '),
        h('a', {
          download: 'exempel.csv',
          href: './exempel.csv'
        }, 'exempel.csv'),
        h('span', {}, ' som du kan ladda ned o testa med')
      ]),
      h('div', {
        class: 'row'
      }, [
        h('div', {
          class: 'column'
        }),
        h('div', {
          class: 'column'
        }),
        h('div', {
          class: 'column'
        }, [
          h('label', {}, 'Välj slutår')
        ])
      ]),
      h('div', {
        class: 'row'
      }, [
        h('div', {
          class: 'column'
        }, [
          h('label', {
            for: 'files',
            class: 'button file-label'
          }, 'Ladda upp .csv'),
          h('input', {
            type: 'file',
            id: 'files',
            accept: '.csv',
            onchange: e => actions.parseFile(e)
          })
        ]),
        h('div', {
          class: 'column'
        }, [
          h('button', {
            type: 'button',
            class: 'download',
            disabled: state.rows.length === 0,
            onclick: e => actions.downloadCSVFile(e)
          }, 'Ladda ned .csv')
        ]),
        h('div', {
          class: 'column'
        }, [
          h('select', {
            value: state.year,
            onchange: e => actions.set({ year: e.target.value })
          }, [
            Object.keys(priceIndex).map((key, index) => h('option', {}, key))
          ])
        ])
      ]),
      h('label', {}, 'Klistra in data'),
      h('textarea', {
        class: 'high',
        rows: 7,
        oninput: e => actions.parseString(e),
        placeholder: `1979, 500
1980, 600
1981, 700
1982, 800`
      }),
      h('table', {}, [
        h('thead', {}, [
          h('tr', {}, [
            h('th', {}, 'År'),
            h('th', {}, 'Historiskt pris'),
            h('th', {}, `Motsvarande pris ${state.year}`)
          ])
        ]),
        h('tbody', {}, [
          state.rows.map(r =>
            h('tr', {}, [
              h('td', {}, r.year),
              h('td', {}, `${formatPrice(r.price)} kr`),
              h('td', {}, `${formatPrice(priceToday(state.year, r.year, r.price))} kr`)
            ])
          )
        ])
      ])
    ])
  ])
)

app(state, actions, view, document.body)
