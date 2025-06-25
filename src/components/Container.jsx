import React from 'react'

const Container = ({children, className}) => {
  return (
    <>
      <div className={`${className} container w-[1170px] mx-auto`}>
        {children}
      </div>
    </>
  )
}

export default Container
