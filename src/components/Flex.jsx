import React from 'react'

const Flex = ({children, className}) => {
  return (
    <>
      <div className={`${className} flex justify-between items-center`}>
        {children}
      </div>
    </>
  )
}

export default Flex
