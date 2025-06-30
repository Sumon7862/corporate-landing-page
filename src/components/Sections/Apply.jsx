import React from 'react'
import Button from '../Button'

const Apply = () => {
  return (
    <>
    <div className='py-32.5'>
    <div className='bg-[#313131] px-68 py-32.5 w-360 mx-auto text-center'>
        <h2 className='!text-white w-223 text-[40px]'>Ready To Get Insured? Submit Your Request And Hear Back As Soon As Tomorroe.</h2>
        <div className='flex items-center justify-center gap-2 pt-5 pb-7.5'>
            <input className='py-4.5 px-4 bg-white text-[#676767] rounded-lg w-80' type="email" placeholder='Your Email' />
            <Button>Get started</Button>
        </div>
        <p className='w-139 mx-auto !text-white opacity-75'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>

    </div>
    </div>
      
    </>
  )
}

export default Apply
