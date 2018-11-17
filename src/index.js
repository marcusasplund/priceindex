/* eslint-disable no-unused-vars */
import { h, app } from 'hyperapp'
import { priceIndex, priceIndexMonths } from './constants/price-index'
import './styles/app.scss'
import 'milligram'

const state = {
  hello: 'hello',
  result: 0
}

const actions = {
  set: x => x
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
        }, 'Prisomräknare'),
        h('ul', {
          class: 'navigation-list float-right'
        }, [
          h('li', {
            class: 'navigation-item'
          }, [
            h('a', {
              class: 'navigation-link'
            }, 'test')
          ]),
          h('li', {
            class: 'navigation-item'
          }, [
            h('a', {
              class: 'navigation-link'
            }, 'test')
          ]),
          h('li', {
            class: 'navigation-item'
          }, [
            h('a', {
              class: 'navigation-link'
            }, 'logout')
          ])
        ]),
        h('button', {
          class: 'navbar-burger',
          'aria-label': 'menu',
          onclick: e => actions.set({ isClosed: !state.isClosed })
        }, [
          h('i', {
            class: 'material-icons'
          }, 'menu')
        ])
      ])
    ]),
    h('div', {
      class: 'content'
    }, [
      h('p', {}, state.hello),
      Object.keys(priceIndex).map((key, index) => h('p', {}, key + ' ' + priceIndex[key]))
    ])
  ])
)

app(state, actions, view, document.body)
