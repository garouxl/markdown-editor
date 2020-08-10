import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const SaveMessage = ({ isSaving }) => (
  <p className={`save-message ${isSaving ? 'show' : ''}`}>
    {isSaving !== null && (
      <span>{isSaving ? 'Salvando...' : 'Salvo :)'}</span>
    )}
  </p>
)

SaveMessage.getDefaultProps = {
  isSaving: null
}

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
