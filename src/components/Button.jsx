import React from 'react'

const Button = ({ children }) => {
  return (
    <>
      <button className='bg-[#89D32A] text-white rounded-[10px] px-[30px] py-[15px] text-[20px] font-bold hover:bg-lime-600'>{children}</button>
    </>
  )
}

export default Button

