import React from 'react'
import Button from './Button'
import BannerImage from '../assets/banner.png'
import Container from './Container'
import Flex from './Flex'

const Banner = () => {
    return (
        <>
            <Container>
                <Flex className='mt-[44px]'>
                    <div>
                        <h2 className='w-[680px] font-bold text-[70px] leading-[90px] tracking-[2px] text-[#313131]'>We Are Ready To Make Your New Life Happier.</h2>
                        <p className='w-[620px] text-[20px] leading-[36px] mt-[30px] mb-[40px]'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
                        <Button>Get a Consultation</Button>
                    </div>
                    <div>
                        <img src={BannerImage} alt="#" />
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Banner
