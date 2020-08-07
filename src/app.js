'use strict'

import React, { Component } from 'react'
import marked from 'marked'

import MarkdownEditor from 'components/markdown-editor'

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
      defaultValue: '### localStorage vazio, escreva algo usando notação markdown...',
      isSaving: null
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
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

    this.handleCreate = () => {
      console.log('criou arquivo fake :o)')
      this.setState({ value: '' })
      this.textarea.focus()
    }
  }

  componentDidMount () {
    const value = window.localStorage.getItem('md')
    this.setState({ value: value || this.state.defaultValue })
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
        getMarkup={this.getMarkup}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App
