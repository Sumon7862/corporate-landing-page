import React from 'react'

const SectionHeading = ({title, heading, paragraph}) => {
  return (
    <>
      <div className='text-center mx-auto w-[746px]'>
        <h5 className='!text-[#89D32A] tracking-[2px] border-b border-dashed border-[#676767] pb-5 w-[262px] mx-auto'>{title}</h5>
        <h2 className='text-[40px] pt-7.5 pb-5'>{heading}</h2>
        <p className='font-normal leading-[26px] w-[602px] mx-auto'>{paragraph}</p>
      </div>
    </>
  )
}

export default SectionHeading
