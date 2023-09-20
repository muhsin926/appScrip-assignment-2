import React from 'react'

const Button = ({className , children, ...property}) => {
  return (
    <button className={className} {...property}>{children}</button>
  )
}

export default Button