import React from 'react'

const Button = ({ children }) => {
  return (
    <>
      <button className='bg-[#89D32A] text-white rounded-[10px] px-[30px] py-[15px] text-[20px] font-bold'>{children}</button>
    </>
  )
}

export default Button

