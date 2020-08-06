import React from 'react'
import { PropTypes } from 'prop-types'

const Header = ({ isSaving }) => (
  <header className='header'>
    <p className={`save-message ${isSaving ? '' : 'saved'}`}>
      {isSaving ? 'Salvando...' : 'Salvo :)'}
    </p>
  </header>
)

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default Header
