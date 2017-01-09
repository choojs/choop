require('jsdom-global')('', { url: 'http://localhost:8080/' })
global.SVGElement = global.Element

const test = require('tape')
const html = require('../html')
const rooch = require('../')

test('basic rendering', t => {
  t.plan(1)

  const app = rooch()

  app.model({
    state: { title: 'Not quite set yet' },
    reducers: {
      update: (data, state) => ({ title: data })
    }
  })

  app.router(['/', (state, prev, send) => {
    return html`
      <main>
        <h1>Title: ${state.title}</h1>
        <input
          type="text"
          oninput=${(e) => send('update', e.target.value)}>
      </main>
    `
  }])

  app(document.body)

  t.equal(document.body.innerHTML, `<main>\n        <h1>Title: Not quite set yet</h1>\n        <input type="text">\n    </main>`)
})
