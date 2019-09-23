/* eslint-disable no-unused-vars */
import Papa from 'papaparse'
import download from 'downloadjs'
import { h, app } from 'hyperapp'
import { priceIndex } from './constants/price-index'
import 'url-search-params-polyfill'
import 'modern-normalize'
import 'milligram'
import './styles/app.scss'

const urlParams = new URLSearchParams(window.location.search)
const years = urlParams.get('years') || ''
const prices = urlParams.get('prices') || ''
const year = urlParams.get('year') || ''
const country = urlParams.get('country') || ''
const rows = []

if (years && prices && year) {
  years.split(',').map((y, i) => {
    rows.push({
      year: y,
      price: prices.split(',')[i]
    })
  })
}

const formatPrice = (price) => {
  price = +price
  price = price.toFixed(2)
  return price.toLocaleString('sv-SE')
}

const countries = [
  {
    name: 'United Kingdom',
    val: 'uk'
  }, {
    name: 'Sverige',
    val: 'sv'
  }, {
    name: 'USA',
    val: 'us'
  }
]

const currency = {
  sv: 'Kr',
  uk: '\u00a3',
  us: '$'
}

const state = {
  rows: rows || [],
  year: year || 2017,
  country: country || 'sv'
}

const priceToday = (country, finalyear, year, price) => {
  return (priceIndex[country][finalyear] / priceIndex[country][year]) * price
}

const actions = {
  set: x => x,

  updateParams: () => (state, actions) => {
    const params = new URLSearchParams()
    const years = []
    const prices = []
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
    } else {
      window.history.replaceState({}, '', `${window.location.pathname}`)
    }
  },

  prepareDownLoadList: () => (state, actions) => {
    const downLoadList = []
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
    const data = results.data
    const year = +data[0]
    const price = +data[1]
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
    const rows = actions.prepareDownLoadList()
    download(Papa.unparse(rows, {
      delimiter: ';'
    }), 'converted.csv', 'text/csv')
  },

  parseCSV: (csv) => (state, actions) => {
    actions.set({
      rows: []
    })
    const data = csv.isFile ? csv.e.target.files[0] : csv.e.target.value
    Papa.parse(data, {
      download: csv.isFile,
      header: false,
      step: (results) => {
        actions.addRows(results)
      },
      complete: () => {
        console.log('finished')
        if (csv.isFile) {
          csv.e.target.value = ''
        }
        actions.updateParams()
      }
    })
  },

  parseFile: (e) => (state, actions) => {
    actions.parseCSV({ e: e, isFile: true })
  },

  parseString: (e) => (state, actions) => {
    actions.parseCSV({ e: e })
  },

  setCountry: (c) => (state, actions) => {
    actions.set({
      year: 2017,
      rows: [],
      country: c
    })
    actions.updateParams()
  },

  setYear: (y) => (state, actions) => {
    actions.set({
      year: +y
    })
    actions.updateParams()
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
      h('p', {}, 'Här kan du konvertera längre serier med historiska priser. Antingen genom att ladda upp en .csv med tabelldata i ett format där de två första kolumnerna är [år], [pris]. Eller genom att klistra in eller skriva den i textrutan nedan. Efter konvertering kan du ladda ned en .csv med resultatet.'),
      h('p', {}, [
        h('span', {}, 'Datan kommer från '),
        h('a', {
          href: 'https://www.scb.se/hitta-statistik/sverige-i-siffror/prisomraknaren/'
        }, 'SCB:s prisomräknare, '),
        h('a', {
          href: 'https://www.bankofengland.co.uk/monetary-policy/inflation/inflation-calculator'
        }, 'Bank Of England'),
        h('span', {}, ' och '),
        h('a', {
          href: 'https://data.bls.gov/timeseries/CUUR0000SA0'
        }, 'Bureau of Labor Statistics'),
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
            onchange: ({ target }) => actions.setYear(target.value)
          }, [
            Object.keys(priceIndex[state.country]).map((key, index) => {
              if (state.year === +key) {
                return h('option', { key: key + state.country, selected: true }, key)
              } else {
                return h('option', { key: key + state.country }, key)
              }
            })
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
              h('td', {}, `${formatPrice(r.price)} ${currency[state.country]}`),
              h('td', {}, `${formatPrice(priceToday(state.country, state.year, +r.year, r.price))} ${currency[state.country]}`)
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
