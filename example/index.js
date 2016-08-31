const html = require('../html')
const rooch = require('../')

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
