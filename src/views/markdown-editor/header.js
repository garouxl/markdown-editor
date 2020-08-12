import React from 'react'
import { PropTypes } from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'
import Input from 'components/input'

const Header = ({ isSaving, title, onHandleRemove, onHandleCreate, onHandleChange }) => (
  <header className='header'>
    <Input title={title} onHandleChange={onHandleChange} />
    <SaveMessage isSaving={isSaving} />
    <Button
      kind='button-create'
      onClick={onHandleCreate}
    >
      Criar arquivo
    </Button>
    <Button
      kind='button-remove'
      onClick={onHandleRemove}
    >
      Remover
    </Button>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onHandleRemove: PropTypes.func.isRequired,
  onHandleCreate: PropTypes.func.isRequired
}

export default Header
