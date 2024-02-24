import React from 'react'

export default function Button({style,children,onClick}) {
  const handleClick = ()=> onClick(children)
  return (
    <button style={style} onClick={handleClick}>+{children}</button>
  )
}
