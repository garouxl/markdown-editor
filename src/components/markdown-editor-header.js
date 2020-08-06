import React from 'react'
import { PropTypes } from 'prop-types'

const Header = ({ isSaving, handleRemove }) => (
  <header className='header'>
    <p className={`save-message ${isSaving ? '' : 'saved'}`}>
      {isSaving ? 'Salvando...' : 'Salvo :)'}
    </p>
    <button
      className='button button-remove hey'
      onClick={handleRemove}
    >
      Remover
    </button>
  </header>
)

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Header
