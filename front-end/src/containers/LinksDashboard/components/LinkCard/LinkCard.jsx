import React, { PropTypes } from 'react'

const LinkCard = ({ link, deleteLinkHandler }) =>
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
    <p>
      Clicks: { link.clicks } - <a href="#" onClick={() => deleteLinkHandler(link.code)}>Delete</a>
    </p>
  </div>

LinkCard.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    clicks: PropTypes.number.isRequired,
  }).isRequired,
  deleteLinkHandler: PropTypes.func.isRequired,
}

export default LinkCard
