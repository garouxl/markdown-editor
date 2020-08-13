import React from 'react'

import './style.css'

const Input = ({ title, onHandleChange }) => (
  <input
    className='file-title'
    maxLength='15'
    type='text'
    value={title}
    onChange={onHandleChange('title')}
    placeholder='sem título'
  />
)

export default Input
