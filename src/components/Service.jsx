import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../assets/HomeInsurance.png';
import img2 from '../assets/LifeInsurance.png';
import img3 from '../assets/CarInsurance.png';
import Container from './Container';


const Service = () => {
    return (
        <>
            <Container>
                <div className='text-center mt-[125px] mx-auto'>
                    <h3 className='font-bold text-[16px] text-[#89D32A] tracking-[2px] mb-[10px]'>OUR SERVICES</h3>
                    <span className='text-gray-500'>--------------------------------</span>
                    <h2 className='font-bold text-[40px] text-[#313131] tracking-[2px] leading-[48px] mt-[30px]'>Insurance made simple for you</h2>
                    <p className='font-normal text-[18px] text-[#676767] leading-[26px] w-[602px] mt-5 mx-auto'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[155px] mb-[130px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={img1} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[25px] leading-[32px] trackint-[2px]'>Home insurance</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[10px]'>Home insurance is a type of insurance policy that provides cover for your home.</p>
                        <div className='flex justify-center items-center gap-[5px] mb-[40px]'>
                            <span className='text-[#313131] text-[20px] mb-1 font-semibold'>Learn more</span>  
                            <span><FaArrowRight /></span>
                        </div>
                    </div>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[48px] mb-[237px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={img2} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[25px] leading-[32px] trackint-[2px]'>Life insurance</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[10px]'>Helping you bridge gaps in your health care coverage during times of transition.</p>
                        <div className='flex justify-center items-center gap-[5px] mb-[40px]'>
                            <span className='text-[#313131] text-[20px] mb-1 font-semibold'>Learn more</span>  
                            <span><FaArrowRight /></span>
                        </div>
                    </div>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[155px] mb-[130px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={img3} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[25px] leading-[32px] trackint-[2px]'>Car insurance</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[10px]'>Car insurance is a type of insurance policy that provides cover for your car.</p>
                        <div className='flex justify-center items-center gap-[5px] mb-[40px]'>
                            <span className='text-[#313131] text-[20px] mb-1 font-semibold'>Learn more</span>  
                            <span><FaArrowRight /></span>
                        </div>
                    </div>                    
                </div>
            </Container>
        </>
    )
}

export default Service
