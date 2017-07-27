import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }

    this.handleURLChange = this.handleURLChange.bind(this)
  }

  handleURLChange(e) {
    this.setState({ url: e.target.value })
  }

  render() {
    const { addLinkHandler } = this.props

    return (
      <div>
        <input
          type="text"
          onChange={this.handleURLChange}
        />
        <button onClick={() => addLinkHandler(this.state.url)}>
          Shorten URL
        </button>
      </div>
    )
  }
}

export default Header
