/* eslint-disable no-unused-vars */
import Papa from 'papaparse'
import download from 'downloadjs'
import { h, app } from 'hyperapp'
import { priceIndex } from './constants/price-index'
import 'url-search-params-polyfill'
import 'modern-normalize'
import 'milligram'
import './styles/app.scss'

const formatPrice = (price) => {
  price = Math.round(price)
  return price.toLocaleString('sv-SE')
}

const countries = [
  {
    name: 'United Kingdom',
    val: 'uk'
  }, {
    name: 'Sverige',
    val: 'sv'
  }
]
const state = {
  rows: [],
  year: 2017,
  country: 'sv'
}

const priceToday = (country, finalyear, year, price) => {
  return Math.round((priceIndex[country][finalyear] / priceIndex[country][year]) * price)
}

const actions = { on: e => actions.parseString(e),
  set: x => x,

  updateParams: () => (state, actions) => {
    let params = new URLSearchParams()
    let years = []
    let prices = []
    if (state.rows.length > 0) {
      state.rows.map((r, i) => {
        years.push(r.year)
        prices.push(r.price)
      })
      params.set('years', years.toString())
      params.set('prices', prices.toString())
      params.set('year', state.year)
      params.set('country', state.country)
      window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    }
  },

  getParams: () => (state, actions) => {
    let urlParams = new URLSearchParams(window.location.search)
    let years = urlParams.get('years') || ''
    let prices = urlParams.get('prices') || ''
    let year = urlParams.get('year') || ''
    let country = urlParams.get('country') || ''
    let rows = []
    if (years && prices && year) {
      years.split(',').map((y, i) => {
        rows.push({
          year: y,
          price: prices.split(',')[i]
        })
      })
      actions.set({
        year: year,
        country: country,
        rows: rows
      })
    }
  },

  prepareDownLoadList: () => (state, actions) => {
    let downLoadList = []
    state.rows.map(r => {
      downLoadList.push({
        year: r.year,
        price: r.price,
        [state.year]: priceToday(state.country, state.year, r.year, r.price)
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
        console.log('finished')
      }
    })
  },

  parseFile: (e) => (state, actions) => {
    actions.parseCSV({ data: e.target.files[0], isFile: true })
  },

  parseString: (e) => (state, actions) => {
    actions.parseCSV({ data: e.target.value })
  },
  setCountry: (c) => (state, actions) => {
    actions.set({
      country: c,
      year: 2017,
      rows: []
    })
  }
}

const view = (state, actions) => (
  h('main', {
    class: 'wrapper',
    oncreate: el => actions.getParams(),
    onupdate: el => actions.updateParams()
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
        h('span', {}, ' och '),
        h('a', {
          href: 'https://www.bankofengland.co.uk/monetary-policy/inflation/inflation-calculator'
        }, 'Bank Of England'),
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
          h('label', {}, 'Välj slutår'),
          h('select', {
            value: state.year,
            id: 'yearselect',
            onchange: e => actions.set({ year: e.target.value })
          }, [
            Object.keys(priceIndex[state.country]).map((key, index) => h('option', {}, key))
          ])
        ]),
        h('div', {
          class: 'column'
        }, [
          h('label', {}, 'Välj land'),
          h('select', {
            value: state.country,
            id: 'countryselect',
            onchange: ({ target }) => actions.setCountry(target.value)
          }, [
            countries.map(c => h('option', {
              value: c.val
            }, c.name))
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
              h('td', {}, `${formatPrice(r.price)} ${state.country === 'sv' ? 'Kr' : 'GBP'}`),
              h('td', {}, `${formatPrice(priceToday(state.country, state.year, r.year, r.price))} ${state.country === 'sv' ? 'Kr' : 'GBP'}`)
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
      })
    ])
  ])
)

const main = app(state, actions, view, document.body)
