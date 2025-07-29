import React from 'react'

const Input = (props) => {
  return (
        <input
              type={props.type}
              id={props.id}
              value={props.value}
              onChange={props.onChange}
              placeholder={props.placeholder}
              required
              className={props.className}
              
              />
  )
}

export default Input