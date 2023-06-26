import React from 'react'

function Button({label}) {
  return (
    <div className='text-sm p-2 bg-gray-200 m-2 rounded-xl cursor-pointer hover:bg-gray-600 hover:text-white'>{label}</div>
  )
}

export default Button;