import React from 'react'
import { PropTypes } from 'prop-types'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header'>
    <p className={`save-message ${isSaving ? '' : 'saved'}`}>
      {isSaving ? 'Salvando...' : 'Salvo :)'}
    </p>

    <button
      className='button hey'
      onClick={handleCreate}
    >
      Criar arquivo
    </button>
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
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header
