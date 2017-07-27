import React, { PropTypes } from 'react'

const LinkCard = ({ link }) =>
  <div>
    <h3>
      <a href={ link.url }>
        {link.url}
      </a>
    </h3>
    <h4>
      <a href={ link.short_url }>
        { link.short_url }
      </a>
    </h4>
    <p>Clicks: { link.clicks }</p>
  </div>

LinkCard.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    clicks: PropTypes.number.isRequired,
  }).isRequired
}

export default LinkCard
