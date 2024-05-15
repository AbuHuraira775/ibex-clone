import React from 'react'

function Btn({btnText,btnFunc}) {
  return <button onClick={btnFunc} className='btn'>{btnText}</button>
}

export default Btn