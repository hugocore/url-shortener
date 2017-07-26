import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
// import Home from './components/Home'
import LinksDashboardContainer from 'containers/LinksDashboard'
import NotFound from 'components/NotFound'
import routes from 'constants/routes'

import { history } from './store.js'

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path={routes.root} component={App}>
      <IndexRoute component={LinksDashboardContainer}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
)

export { router }
