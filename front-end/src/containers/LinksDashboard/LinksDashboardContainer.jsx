import React, { Component, PropTypes } from 'react'
import { OrderedSet } from 'immutable'
import { connect } from 'react-redux'

import Header from './components/Header'
import LinksTable from './components/LinksTable'

import getAllLinks from 'redux/links/actions/getLinks'
import addLink from 'redux/links/actions/addLink'

class LinksDashboardContainer extends Component {
  componentDidMount() {
    this.fetchLinks()

    this.addLinkHandler = this.addLinkHandler.bind(this)
  }

  fetchLinks() {
    const { dispatch } = this.props

    dispatch(getAllLinks())
  }

  addLinkHandler(url) {
    const { dispatch } = this.props

    dispatch(addLink(url))
  }

  render() {
    const { links } = this.props

    return (
      <div>
        <Header addLinkHandler={this.addLinkHandler} />
        <a href="#" onClick={() => this.fetchLinks()}>
          Refresh
        </a>
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
