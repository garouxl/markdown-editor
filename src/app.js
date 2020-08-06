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
      value: '',
      defaultValue: '### escreva algo usando notação markdown...',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        window.localStorage.setItem('md', this.state.value)
        this.setState({ isSaving: false })
      }
    }

    this.handleRemove = () => {
      window.localStorage.removeItem('md')
      this.setState({ value: '' })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  }

  componentDidMount () {
    const value = window.localStorage.getItem('md')
    this.setState({ value: value || `${this.state.defaultValue} vc removeu o localStorage!` })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(() => this.handleSave(), 1000)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
