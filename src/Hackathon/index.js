// Hackathon.js
import React from 'react'
const Hackathon = (props) => {
  const children = props.children
    ? <span>{props.children}</span>
    : false
  return (
    <div>
      <h1>Hello Hackathon!</h1>
      {children}
    </div>
  )
}
export default Hackathon