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

  submitLink() {
    const { addLinkHandler } = this.props

    addLinkHandler(this.state.url)

    this.setState({ url: '' })
  }

  render() {
    const { addLinkHandler } = this.props

    return (
      <div>
        <input
          type="text"
          value={this.state.url}
          onChange={this.handleURLChange}
        />
        <button onClick={() => this.submitLink()}>
          Shorten URL
        </button>
      </div>
    )
  }
}

export default Header
