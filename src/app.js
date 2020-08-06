'use strict'

import React, { Component } from 'react'
import MarkdownEditor from 'components/markdown-editor'
import marked from 'marked'

import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlightAuto(code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()

    this.state = {
      value: '### escreva algum código usando notação markdown...'
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      window.localStorage.setItem('md', this.state.value)
    }
  }

  componentDidMount () {
    const value = window.localStorage.getItem('md')
    this.setState({ value })
  }

  componentDidUpdate () {
    // só dispara se o didUpdate ficar parado por 2 segundos
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 2000)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave}
      />
    )
  }
}

export default App
