'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Forkme from 'components/fork-me'

const MarkdownEditor = ({ value, getMarkup, handleChange, textareaRef, ...props }) => (
  <section className='editor'>
    <Forkme />
    <Header {...props} />
    <main className='main'>
      <textarea
        className='board'
        value={value}
        onChange={handleChange}
        autoFocus
        ref={textareaRef}
      />
      <article
        className='view crt glow-text'
        dangerouslySetInnerHTML={getMarkup()}
      />
    </main>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
