# rooch [![stability][0]][1]
[![npm version][2]][3] [![downloads][8]][9] [![js-standard-style][10]][11]

Ever wondered what would happen if `react` and `choo` got a baby?

It's not great, but this package is your grand savior when your CTO pulls the:
_"I heart React is cool"_-card. Regardless of the questionable patent situation
and file sizes, your CTO has now unwittingly senteced you to `JSX` and
`webpack`.

😱😱😱😱

Yeah, not quite my cup of tea either. But fine, we'll make do with what we were
handed and remove everything that's not great about react from react.

Time to add some of that sweet, sweet architecture juice on top react so you
don't have to care about the layout engine. Because that's all React is right,
a library? hmmmmm. By taking [hyperx][hyperx], [preact][preact],
[barracks][barracks], [sheet-router][sheet-router] and [bankai][bankai] we can
create a modern dev environment that's nice to work in. Let the concoction
simmer for 2 minutes, stir once. And voila, `rooch` :zap:

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

P.s. I love the React dev team. They're pushing the boundries of open source,
and doing a stellar job at it. However much critique this repository might have
on React and Facebook (chaotic) by extent - the humans, on the floor, doing the
actual work are great.

## API
Nah mate, you figure it out yourself.

## FAQ
### Should I use this?
Consider firing your CTO first. That's not an option? Yeah this might actually
make your working life better.

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
