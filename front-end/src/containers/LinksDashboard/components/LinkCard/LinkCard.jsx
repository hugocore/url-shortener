import React, { PropTypes } from 'react'

const LinkCard = ({ link, deleteLinkHandler }) =>
  <div className="col s12 m6">
    <div className="card">
      <div className="card-content white-text">
        <span className="card-title">
          <a href={ link.short_url }>
            {link.short_url}
          </a>
        </span>
        <p>
          <a href={ link.url }>
            { link.url }
          </a>
        </p>
      </div>
      <div className="card-action">
        <a href="#">Clicks { link.clicks }</a>
        <a href="#" onClick={() => deleteLinkHandler(link.code)}>Delete</a>
      </div>
    </div>
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
