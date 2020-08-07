import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/button'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header'>
    <p className={`save-message ${isSaving ? 'show' : ''}`}>
      {isSaving !== null && (
        <span>{isSaving ? 'Salvando...' : 'Salvo :)'}</span>
      )}
    </p>
    <Button
      kind='button-create'
      onClick={handleCreate}
    >
      Criar arquivo
    </Button>
    <Button
      kind='button-remove'
      onClick={handleRemove}
    >
      Remover
    </Button>
    <Button
      onClick={handleRemove}
    >
      Outro
    </Button>
  </header>
)

Header.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header
