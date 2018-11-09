<h1 align="center">choop</h1>

<div align="center">
  🚂🚋🚋🚋🚋🚋 + ⚛
</div>
<div align="center">
  <strong>Full on <a href="https://github.com/yoshuawuyts/choo">choo</a> architecture on top of the tiny <a href="https://github.com/developit/preact">preact</a> engine.</strong>
</div>
<div align="center">
  Currently up-to-date with choo <code>6.13.1</code>
</div>

<br />

<div align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/choop">
    <img src="https://img.shields.io/npm/v/choop.svg?style=flat-square"
      alt="NPM version" />
  </a>
  <!-- Downloads -->
  <!--<a href="https://npmjs.org/package/choop">
    <img src="https://img.shields.io/npm/dm/choop.svg?style=flat-square"
      alt="Downloads" />
  </a>-->
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

<br/>

Ever wondered what would happen if [`preact`](https://github.com/developit/preact) and [`choo`](https://github.com/yoshuawuyts/choo) got a baby?

Welp, wonder no longer - here's the answer. Full on `choo` architecture plus a couple `preact` goodies like [`h()`](https://preactjs.com/guide/differences-to-react#what-s-included-) and [components](https://preactjs.com/guide/lifecycle-methods). No JSX, only template strings via [hyperx](https://github.com/substack/hyperx). But you can use JSX if you want to. We even get almost all of the React ecosystem through [preact-compat](https://github.com/developit/preact-compat) 🎉🎉🎉🎉

## Example

```js
var html = require('choop/html')
var devtools = require('choo-devtools')
var choop = require('choop')

var app = choop()
app.use(devtools())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <main>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </main>
  `

  function onclick () {
    emit('increment', 1)
  }
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

Only difference is `preact` will append our app to the element passed into `mount`. So instead of our main view returning `<body>` we return `<main>` (or whatever we want the root to be).

## Components

You can create stateful components right out of the box with `choop`:

```js
var Component = require('choop/component')
var html = require('choop/html')

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
var html = require('choop/html')
var h = require('choop/h')

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

**`state.cache`**

`choo` version `6.11.0` introduced a `state.cache` helper for managing `nanocomponent` instances. This is not included in `choop` since component instance management is taken care of by `preact`.

## More Examples

- **Basic**: https://esnextb.in/?gist=f9f339a9d108f156aa885bca96723d36
- **Using JSX**: https://esnextb.in/?gist=84fd53fc0ea53240da89bef9573c9644
- **Rendering `choop` (`preact`) component**: https://esnextb.in/?gist=28005d951a7347fb652eab669c5ffa1e
- **Rendering `Nanocomponent`**: https://esnextb.in/?gist=01daeea0b216632edf3f0e27b8f0b89a
- **Rendering `React` component**: https://choop-react.glitch.me/ ([source](https://glitch.com/edit/#!/choop-react?path=public/client.js:1:0))

## FAQ

### Should I use this?
Sometimes you gotta use `react`, and the best thing to do in that case might be to jump on the `preact` train, grab a bag of architecture and go to town. This might not be for me, but perhaps it's useful for you. Here you go! 🎁

### What's the real difference here?
[`nanomorph`](https://github.com/choojs/nanomorph) is replaced by [`preact`](https://github.com/developit/preact)

### How do I run react widgets in choop?
Like [this](https://github.com/preact-compat/react):

```
npm i -S preact preact-compat
npm i -S preact-compat/react preact-compat/react-dom
```

### What's the size?

Something like `8.7 kB`

### What about choo?
Yeah, what about me? (_drumroll_)

## Installation
```sh
$ npm install choop
```
