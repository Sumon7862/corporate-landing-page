import React from 'react'
import Button from './Button'
import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mt-[44px]'>
                    <div>
                        <h2 className='w-[680px] font-bold text-[70px] leading-[90px] tracking-[2px] text-[#313131]'>We Are Ready To Make Your New Life Happier.</h2>
                        <p className='w-[620px] font-normal text-[20px] leading-[36px] text-[#676767] mt-[30px] mb-[40px]'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
                        <Button>Get a Consultation</Button>
                    </div>
                    <div>
                        <img src={BannerImage} alt="#" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
