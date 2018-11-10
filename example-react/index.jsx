var choop = require('..')
var React = require('react')

class MyComponent extends React.Component {
  render() {
    return (
      <div id={this.props.nice}>
        {this.props.children}
      </div>
    )
  }
}

function view (state, emit) {
  var props = {
    nice: 1
  }

  return (
    <main>
      <MyComponent {...props}>
        Yooo
      </MyComponent>
    </main>
  ) 
}

var app = choop()

app.route('/', view)

app.mount('#app')
