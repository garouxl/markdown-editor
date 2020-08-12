'use strict'

import React, { Component } from 'react'
import { v4 } from 'uuid'
import marked from 'marked'
import MarkdownEditor from 'views/markdown-editor'
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

    this.clearState = () => ({
      title: '',
      value: '',
      id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title.toLowerCase() || 'sem título',
            content: this.state.value
          }
        }
        window.localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({
          isSaving: false,
          files
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      /* let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id
          ? acc
          : {
            ...acc,
            [fileId]: this.state.files[fileId]
          }
      }, {}) */
      // eslint-disable-next-line no-unused-vars
      const { [this.state.id]: id, ...files } = this.state.files
      window.localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    }
  }

  componentDidMount () {
    const files = JSON.parse(window.localStorage.getItem('markdown-editor'))
    this.setState({ files })
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
        files={this.state.files}
        textareaRef={this.textareaRef}
        title={this.state.title}
        onHandleOpenFile={this.handleOpenFile}
        onHandleChange={this.handleChange}
        onHandleRemove={this.handleRemove}
        onHandleCreate={this.handleCreate}
      />
    )
  }
}

export default App
