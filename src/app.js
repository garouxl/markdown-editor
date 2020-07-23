'use strict'

import React, { Component } from 'react'

import './css/style.css'
import MarkdownEditor from './markdown-editor'

class App extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
      />
    )
  }
}

export default App
