import React from 'react'

export const Label = (props) => {
  return (
      <label htmlFor={props.htmlFor} className={props.className}>{props.text}</label>
  )
}
