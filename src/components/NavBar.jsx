import React from 'react'
import Logo from '../assets/logo.svg'
import Button from './Button'

const NavBar = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mt-[50px]'>
                    <div className='flex items-center gap-5'>
                        <img src={Logo} alt="#" />
                        <h1 className='font-bold text-4xl text-[#313131]'>Pacific Corp.</h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-10'>
                            <li className='text-[16px] text-[#676767]'>Home</li>
                            <li className='text-[16px] text-[#676767]'>Pages</li>
                            <li className='text-[16px] text-[#676767]'>Services</li>
                            <li className='text-[16px] text-[#676767]'>Portfolio</li>
                            <li className='text-[16px] text-[#676767]'>Blog</li>
                            <li className='text-[16px] text-[#676767]'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <Button>Call Now</Button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default NavBar
