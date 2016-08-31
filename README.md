# rooch [![stability][0]][1]
[![npm version][2]][3] [![downloads][8]][9] [![js-standard-style][10]][11]

Ever wondered what would happen if `react` and [choo][choo] got a baby?

Welp, wonder no longer - here's the answer. Full on
[choo](https://github.com/yoshuawuyts/choo) architecture on top of the tiny
[preact](https://github.com/developit/preact) engine. No JSX, only template
strings.

🎉🎉🎉🎉

Why is this useful? Sometimes you gotta use `react`, and the best thing to do
in that case is to jump on the `preact` train, grab a bag of architecture and
go to town. This might not me for me, but perhaps it's useful for you. Here you
go! 🎁

```js
const html = require('rooch/html')
const rooch = require('rooch')

const app = rooch()

app.model({
  state: { title: 'Not quite set yet' },
  reducers: {
    update: (data, state) => ({ title: data })
  }
})

app.router(['/', (state, prev, next) => {
  return html`
    <main>
      <h1>Title: ${state.title}</h1>
      <input
        type="text"
        oninput=${(e) => send('update', e.target.value)}>
    </main>
  `
]})

app.start(document.body)
```
How to run it? Save it to `index.js` and then:
```js
$ npm i rooch && npm i -g bankai
$ bankai start --open
# Voila, website in the browser. Livereloading too! And no slow JSX compilation
```

And to deploy?
```js
$ npm i -g gh-pages
$ bankai build --optimize && gh-pages dist/
# And your optimized website is live!
```

Party in the front, react somewhere in the back.

## API
### app = rooch()
Create a new instance

### app.router(routes)
Register routes on `rooch`. Nested arrays all the way down

### app.model(model)
Register a model on `rooch`. Similar to [choo
models](https://github.com/yoshuawuyts/choo#models)

### app.start(root)
Start the app and render it on a root DOM node

## FAQ
### Should I use this?
Maybe? If you've got no choice other than using `react` this might be useful.

### Why is the start function different from choo?
That's the way `preact` rolls; no way around it. But it's close enough you
probably don't have to care I reckon.

### What about choo?
Yeah, what about me? (_drumroll_)

## Installation
```sh
$ npm install rooch
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[choo]: https://github.com/yoshuawuyts/choo
[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/rooch.svg?style=flat-square
[3]: https://npmjs.org/package/rooch
[4]: https://img.shields.io/travis/yoshuawuyts/rooch/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/rooch
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/rooch/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/rooch
[8]: http://img.shields.io/npm/dm/rooch.svg?style=flat-square
[9]: https://npmjs.org/package/rooch
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
