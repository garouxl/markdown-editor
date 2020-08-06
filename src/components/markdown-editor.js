'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, isSaving, handleChange, getMarkup }) => (
  <section className='editor'>
    <Header isSaving={isSaving} />
    <main className='main'>
      <textarea className='board' value={value} onChange={handleChange} autoFocus />
      <article className='view crt glow-text' dangerouslySetInnerHTML={getMarkup()} />
    </main>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  isSaving: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
