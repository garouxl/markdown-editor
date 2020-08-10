import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header'>
    <SaveMessage isSaving={isSaving} />
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
  </header>
)

Header.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header
