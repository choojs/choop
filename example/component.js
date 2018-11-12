var choop = require('..')
var html = require('../html')
var h = require('../h')
var Component = require('../component')

class ClickMe extends Component {
  constructor (props) {
    super(props)
    this.state = { n: 0 }
    this.handleClick = () => {
      this.setState({ n: this.state.n + 1 })
    }
  }
  render (props, state) {
    return html`
      <div>
        <h1>clicked ${state.n} times</h1>
        <button onClick=${this.handleClick}>click me!</button>
      </div>
    `
  }
}

function view (state, emit) {
  return html`
    <main>
      ${h(ClickMe)}
    </main>
  `
}

var app = choop()

app.route('/', view)

app.mount('body')
