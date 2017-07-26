import React, { PropTypes } from 'react'

const LinkCard = ({ link }) =>
  <div>
    <h3>{ link.url }</h3>
    <h4>{ link.code }</h4>
    <p>Clicks: { link.clicks }</p>
  </div>

LinkCard.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    clicks: PropTypes.string.isRequired,
  }).isRequired
}

export default LinkCard
