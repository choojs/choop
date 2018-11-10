var choop = require('..')
var { Component } = require('react')

class ClickMe extends Component {
  constructor () {
    super()
    this.state = { n: 0 }
    this.handleClick = () => {
      this.setState({ n: this.state.n + 1 })
    }
  }

  render (props, state) {
    return <div>
      <h1>clicked ${state.n} times</h1>
      <button onClick=${this.handleClick}>click me!</button>
    </div>
  }
}

function view (state, emit) {
  return <main>
    <ClickMe />
  </main>
}

var app = choop()

app.route('/', view)

app.mount('body')
