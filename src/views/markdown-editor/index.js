'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Forkme from '../../components/fork-me'
import Files from '../../components/files'

const MarkdownEditor = ({ value, getMarkup, onHandleChange, textareaRef, files, onHandleOpenFile, hasFiles, ...props }) => (
  <section className='editor'>
    <Forkme />
    <Files files={files} hasFiles={hasFiles} onHandleOpenFile={onHandleOpenFile} />
    <Header {...props} onHandleChange={onHandleChange} />
    <main className='main'>
      <textarea
        className={`board ${hasFiles ? 'has-files' : ''}`}
        value={value}
        onChange={onHandleChange('value')}
        autoFocus
        ref={textareaRef}
      />
      <article
        className={`view ${hasFiles ? 'has-files' : ''} crt glow-text`}
        dangerouslySetInnerHTML={getMarkup()}
      />
    </main>
  </section>
)

MarkdownEditor.propTypes = {
  hasFiles: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
