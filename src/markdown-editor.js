'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} />
    <div className='view'>
      {value}
    </div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
