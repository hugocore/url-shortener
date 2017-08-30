import React from 'react'

// import Materialize
require('../../node_modules/materialize-css/dist/js/materialize.min.js')
import '../stylesheets/main.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}

        <footer>
          <div className="row">
            <div className="col s12 m6">
              Made with Sinatra + React.js
            </div>

            <div className="col s12 m6 pull-right">
              &copy; {new Date().getFullYear()}
              <a href="http://www.hugosequeira.com" target="_blank"> HugoSequeira.com </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
