import React from 'react'
import QuoteImg from '../assets/quote-left.png'
import verify from '../assets/verify.svg'

const Quote = () => {
    return (
        <>
            <div className='container mx-auto mb-[130px]'>
                <div className='bg-[url(./assets/quoteBG.png)] bg-cover bg-no-repeat w-full'>
                    <div className='py-[50px] pl-[45px]'>
                        <div className='w-[447px] text-center shadow-xl/30 rounded-[16px] bg-white'>
                        <img className='px-[56px] pt-[48px] mb-[20px]' src={QuoteImg} alt="#" />
                        <p className='font-semibold text-[#676767] text-[25px] w-[356px] text-left pl-[56px] leading-[40px] mb-[30px]'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</p>
                        <h2 className='font-bold text-[#313131] text-left pl-[56px] text-[20px] leading-[28px] mb-[10px]'>Daniel Anderson</h2>
                        <div className='flex pl-[56px] items-center gap-[5px]'>
                            <img className='mb-[48px]' src={verify} alt="#" />
                            <span className='text-[#676767] text-[16px] italic font-normal mb-[48px]'>Verified customer</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quote
