import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import LinksTable from './components/LinksTable'

class LinksDashboardContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <LinksTable />
      </div>
    )
  }
}

LinksDashboardContainer.propTypes = {
}

export default connect(null)(LinksDashboardContainer)
export { LinksDashboardContainer }
