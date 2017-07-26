import React, { PropTypes } from 'react'
import { OrderedSet } from 'immutable'

import LinkCard from '../LinkCard/'

const renderLinkCard = link =>
  <LinkCard key={link.code} link={link} />

const LinksTable = ({ links }) =>
  <div>
    {links.map(renderLinkCard)}
  </div>

LinksTable.propTypes = {
  links: PropTypes.instanceOf(OrderedSet).isRequired,
}

LinksTable.defaultProps = {
  links: OrderedSet(),
}

export default LinksTable
