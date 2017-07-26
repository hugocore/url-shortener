import React, { Component, PropTypes } from 'react'
import { OrderedSet } from 'immutable'
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
    const { links } = this.props

    return (
      <div>
        <Header />
        <LinksTable links={links} />
      </div>
    )
  }
}

LinksDashboardContainer.propTypes = {
}

const mapStateToProps = (state, ownProps) => ({
  links: state.links.allIds.reduce((links, id) => {
    const link = state.links.byId.get(id)

    return link ? links.add(link) : links
  }, new OrderedSet())
})

export default connect(mapStateToProps)(LinksDashboardContainer)

export { LinksDashboardContainer }
