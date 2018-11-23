/* eslint-disable no-unused-vars */
import Papa from 'papaparse'
import download from 'downloadjs'
import { h, app } from 'hyperapp'
import { priceIndex, priceIndexMonths } from './constants/price-index'
import 'modern-normalize'
import 'milligram'
import './styles/app.scss'

const formatPrice = (price) => {
  price = Math.round(price)
  return price.toLocaleString('sv-SE')
}

const state = {
  rows: [],
  year: 2018,
  initial: `1914, 100
1979, 300
1980, 400
1981, 450
`
}

const priceToday = (finalyear, year, price) => {
  return Math.round((priceIndex[finalyear] / priceIndex[year]) * price)
}

const actions = { on: e => actions.parseString(e),
  set: x => x,

  prepareDownLoadList: () => (state, actions) => {
    let downLoadList = []
    state.rows.map(r => {
      downLoadList.push({
        year: r.year,
        price: r.price,
        [state.year]: priceToday(state.year, r.year, r.price)
      })
    })
    return downLoadList
  },

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
    let rows = actions.prepareDownLoadList()
    download(Papa.unparse(rows, {
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
      on: e => actions.parseString(e),
      step: (results) => {
        actions.addRows(results)
      },
      complete: () => {
        console.log('finsihed')
      }
    })
  },

  init: () => (state, actions) => {
    actions.parseCSV({ data: state.initial })
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
    h('div', { on: e => actions.parseString(e),
      class: 'content container'
    }, [
      h('p', {}, 'Här kan du konvertera längre serier med historiska priser. Antingen genom att ladda upp en .csv med tabelldata i ett format där de två första kolumnerna är [år], [pris]. Eller genom att klistra in eller skriva den i textrutan nedan. Efter konvertering kan du ladda ned en .csv med resultatet.'),
      h('p', {}, [
        h('span', {}, 'Datan kommer från '),
        h('a', {
          href: 'https://www.scb.se/hitta-statistik/sverige-i-siffror/prisomraknaren/'
        }, 'SCB:s prisomräknare'),
        h('br', {}),
        h('span', {}, 'Du kan kontakta mig, '),
        h('a', {
          href: 'https://twitter.com/marcusasplund'
        }, '@marcusasplund'),
        h('span', {}, ' om du har några frågor '),
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
            id: 'yearselect',
            onchange: e => actions.set({ year: e.target.value })
          }, [
            Object.keys(priceIndex).map((key, index) => h('option', {}, key))
          ])
        ])
      ]),
      h('table', {}, [
        h('thead', {}, [
          h('tr', {}, [
            h('th', {}, 'År'),
            h('th', {}, 'Historiskt pris'),
            h('th', {}, `Pris ${state.year}`)
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
      ]),
      h('hr', {}),
      h('label', {
        for: 'yearselect'
      }, 'Klistra in data'),
      h('textarea', {
        class: 'high',
        'aria-label': 'Manual input',
        rows: 7,
        oninput: e => actions.parseString(e),
        placeholder: `1979, 500
1980, 600
1981, 700
1982, 800`
      }, state.initial)
    ])
  ])
)

const main = app(state, actions, view, document.body)

main.init()
