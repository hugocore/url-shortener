import React, { Component, PropTypes } from 'react'
import { OrderedSet } from 'immutable'
import { connect } from 'react-redux'

import Header from './components/Header'
import LinksTable from './components/LinksTable'

import getAllLinks from 'redux/links/actions/getLinks'
import addLink from 'redux/links/actions/addLink'
import deleteLink from 'redux/links/actions/deleteLink'

class LinksDashboardContainer extends Component {
  componentDidMount() {
    this.fetchLinks()

    this.addLinkHandler = this.addLinkHandler.bind(this)
    this.deleteLinkHandler = this.deleteLinkHandler.bind(this)
  }

  fetchLinks() {
    const { dispatch } = this.props

    dispatch(getAllLinks())
  }

  addLinkHandler(url) {
    const { dispatch } = this.props

    if (url) {
      dispatch(addLink(url))
    }
  }

  deleteLinkHandler(url) {
    const { dispatch } = this.props

    dispatch(deleteLink(url))
  }

  render() {
    const { links } = this.props

    return (
      <div>
        <Header addLinkHandler={this.addLinkHandler} />
        <a
          className="waves-effect waves-teal btn-flat pull-right"
          onClick={() => this.fetchLinks()}
        >
          Refresh
        </a>
        <LinksTable
          links={links}
          deleteLinkHandler={this.deleteLinkHandler}
        />
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
