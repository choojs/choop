# rooch

**Full on [choo](https://github.com/yoshuawuyts/choo) architecture on top of the tiny [preact](https://github.com/developit/preact) engine.**

<br />

<div>
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/rooch">
    <img src="https://img.shields.io/npm/v/rooch.svg?style=flat-square"
      alt="NPM version" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/yoshuawuyts/rooch">
    <img src="https://img.shields.io/travis/yoshuawuyts/rooch/master.svg?style=flat-square"
      alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://codecov.io/github/yoshuawuyts/rooch">
    <img src="https://img.shields.io/codecov/c/github/yoshuawuyts/rooch/master.svg?style=flat-square"
      alt="Test Coverage" />
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/rooch">
    <img src="https://img.shields.io/npm/dm/rooch.svg?style=flat-square"
      alt="Downloads" />
  </a>
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

<br/>

Ever wondered what would happen if `react` and [choo](https://github.com/yoshuawuyts/choo) got a baby?

Welp, wonder no longer - here's the answer. Full on [choo](https://github.com/yoshuawuyts/choo) architecture plus a couple `preact` goodies like [`h()`](https://preactjs.com/guide/differences-to-react#what-s-included-) and [components](https://preactjs.com/guide/lifecycle-methods). No JSX, only template strings via [hyperx](https://github.com/substack/hyperx). But you can use JSX if you want to. We even support almost all of the React ecosystem through [preact-compat](https://github.com/developit/preact-compat).

🎉🎉🎉🎉

Why is this useful? Sometimes you gotta use `react`, and the best thing to do in that case is to jump on the `preact` train, grab a bag of architecture and go to town. This might not be for me, but perhaps it's useful for you. Here you go! 🎁

```js
var html = require('rooch/html')
var rooch = require('rooch')

var app = rooch()
app.use(logger)
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function logger (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
}

function countStore (state, emitter) {
  state.count = 0
  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })
}
```

See? Same same as `choo`!

## Components

Everything in `rooch` _should_ be the same, but things can be a _little_ different for components:

- In `choo`, stateful components are created using something like [nanocomponent](https://github.com/yoshuawuyts/nanocomponent)
- In `rooch`, stateful components can be created by [extending the preact `Component` class](https://preactjs.com/guide/extending-component). Some additional aliases are provided for this, `rooch/h` and `rooch/component`

```js
var Component = require('rooch/component')
var html = require('rooch/html')

class ClickMe extends Component {
  constructor () {
    super()
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
```

And then render them in your views using `h()`:

```js
var html = require('rooch/html')
var h = require('rooch/h')

var ClickMe = require('./ClickMe')

function view (state, emit) {
  return html`
    <body>
      ${h(ClickMe)}
    </body>
  `
}
```

Optionally pass data a.k.a. `props`:

```js
h(MyComponent, { someData: 'beep' })
```

You can use `props` or an additional constructor function to pass `emit` into your components.

## FAQ
### Should I use this?
Maybe? If you've got no choice other than using `(p)react` this might be useful.

### How do I run react widgets in rooch?
Like [this](https://github.com/preact-compat/react):

```
npm i -S preact preact-compat
npm i -S preact-compat/react preact-compat/react-dom
```

### What's the size?

Something like `7kb`

### What about choo?
Yeah, what about me? (_drumroll_)

## Installation
```sh
$ npm install rooch
```
