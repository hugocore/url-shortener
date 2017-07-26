import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import LinksTable from './components/LinksTable'

import getAllLinks from 'redux/links/actions/getLinks'

class LinksDashboardContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getAllLinks())
  }

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
