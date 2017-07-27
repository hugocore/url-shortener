import React, { PropTypes } from 'react'
import { OrderedSet } from 'immutable'

import LinkCard from '../LinkCard/'

const LinksTable = ({ links, deleteLinkHandler }) => {
  const renderLinkCard = link =>
    <LinkCard key={link.code} link={link} deleteLinkHandler={deleteLinkHandler} />

  return (
    <div className="row">
      {links.map(renderLinkCard)}
    </div>
  )
}

LinksTable.propTypes = {
  links: PropTypes.instanceOf(OrderedSet),
  deleteLinkHandler: PropTypes.func,
}

LinksTable.defaultProps = {
  links: OrderedSet(),
  deleteLinkHandler: () => {},
}

export default LinksTable
