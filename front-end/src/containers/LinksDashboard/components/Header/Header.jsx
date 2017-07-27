import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }

    this.handleURLChange = this.handleURLChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleURLChange(e) {
    this.setState({ url: e.target.value })
  }

  submitLink() {
    const { addLinkHandler } = this.props

    addLinkHandler(this.state.url)

    this.setState({ url: '' })
  }

  handleKeyPress(event) {
    if(event.key == 'Enter') {
      this.submitLink()
    }
  }

  render() {
    const { addLinkHandler } = this.props

    return (
      <div className="Header">
        <h2>Shorten your links</h2>
        <p>Type your URL and we will shorten it for you! Note that all our links can be accessed by anyone</p>
        <input
          type="text"
          className="Header--input"
          value={this.state.url}
          onChange={this.handleURLChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          className="btn waves-effect waves-light"
          onClick={() => this.submitLink()}
        >
          Shorten URL
        </button>
      </div>
    )
  }
}

export default Header
