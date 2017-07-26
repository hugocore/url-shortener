import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class LinksDashboardContainer extends Component {
  render() {
    return (
      <div>Hello, Links. World.</div>
    )
  }
}

LinksDashboardContainer.propTypes = {
}

export default connect(null)(LinksDashboardContainer)
export { LinksDashboardContainer }
