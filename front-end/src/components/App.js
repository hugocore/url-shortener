import React from 'react'

// import Materialize
require('../../node_modules/materialize-css/dist/js/materialize.min.js')
import '../stylesheets/main.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}

        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
              <div className="row">
                <div className="col s12 m6">
                  &copy; {new Date().getFullYear()}
                  <a class="grey-text text-lighten-4 right" href="http://www.hugosequeira.com"> HugoSequeira.com </a>
                </div>

                <div className="col s12 m6 pull-right">
                  Made with Sinatra + React.js
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
