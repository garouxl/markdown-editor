'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

import './style.css'

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={`button ${kind} hey`}>
    {children}
  </button>
)

Button.getDefaultProps = {
  kind: ''
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['button-create', 'button-remove'])
}

export default Button
