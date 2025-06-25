import React from 'react'
import pic1 from '../assets/B1.png'
import pic2 from '../assets/B2.png'
import pic3 from '../assets/B3.png'
import pic4 from '../assets/B4.png'
import pic5 from '../assets/B5.png'
import Container from './Container'

const Benefits = () => {
    return (
        <>
            <Container>
                <div className='text-center mt-[125px] mx-auto'>
                    <h3 className='font-bold text-[16px] text-[#89D32A] tracking-[2px] mb-[10px]'>your benefits</h3>
                    <span className='text-gray-500'>......................................................</span>
                    <h2 className='font-bold text-[40px] text-[#313131] tracking-[2px] leading-[48px] mt-[30px]'>We’re Your Right Insurance Advocate</h2>
                    <p className='font-normal text-[18px] text-[#676767] leading-[26px] w-[602px] mt-5 mx-auto'>We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
                    </div>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={pic2} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We have the best prices</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find.</p>
                    </div>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={pic3} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re your insurance advocate</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>We will deal with the insurance companies for you, even after you’ve bought your plan.</p>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[20px] mb-[130px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={pic4} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[25px] leading-[32px] trackint-[2px]'>We’re availabe 24/7</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>We have your back 24/7 between our online chat function, email and telephone support.</p>
                    </div>
                    <div className='w-[370px] text-center shadow-xl/20 mt-[20px] mb-[130px] rounded-[10px]'>
                        <img className='mx-auto mt-[40px] mb-[30px]' src={pic5} alt="#" />
                        <h2 className='font-bold text-[#313131] text-[25px] leading-[32px] trackint-[2px]'>We make insurance simple</h2>
                        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>We’re commited to making applying for insurance as simple as can be for our customers.</p>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Benefits
