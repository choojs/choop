var choop = require('..')
var React = require('react')
var h = require('../h')
var html = require('../html')

class MyComponent extends React.Component {
  render() {
    return html`<div>Hello World</div>`
  }
}

function view (state, emit) {
  return html`
    <main>
      ${h(MyComponent, {key:1})}
    </main>
  `
}

var app = choop()

app.route('/', view)

app.mount('#app')
