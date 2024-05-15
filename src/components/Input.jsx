import React from 'react'

function Input({type,val,place}) {
  return (
    <input type={type} placeholder={place} value={val} />
  )
}

export default Input