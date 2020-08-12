'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Forkme from 'components/fork-me'
import Files from 'components/files'

const MarkdownEditor = ({ value, getMarkup, onHandleChange, textareaRef, files, onHandleOpenFile, ...props }) => (
  <section className='editor'>
    <Forkme />
    <Files files={files} onHandleOpenFile={onHandleOpenFile} />
    <Header {...props} onHandleChange={onHandleChange} />
    <main className='main'>
      <textarea
        className='board'
        value={value}
        onChange={onHandleChange('value')}
        autoFocus
        ref={textareaRef}
        style={Object.keys(files).length ? { width: '43.8vw' } : {}}
      />
      <article
        className='view crt glow-text'
        dangerouslySetInnerHTML={getMarkup()}
        style={Object.keys(files).length ? { width: '43.8vw' } : {}}
      />
    </main>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
