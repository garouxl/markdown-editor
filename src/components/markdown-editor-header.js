import React from 'react'

const Header = ({ onSave }) => (
  <header className='header'>
    <button className='button' onClick={onSave}>Salvar</button>
  </header>
)

export default Header
