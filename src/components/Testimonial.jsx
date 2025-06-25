import React from "react";
import pic1 from '../assets/B1.png'
import Container from './Container'
import Flex from "./Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>

        
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>
      <div className='w-[300px] text-center shadow-xl/20 mt-[100px] mb-[30px] rounded-[10px]'>
        <img className='mx-auto mt-[40px] mb-[30px]' src={pic1} alt="#" />
        <h2 className='font-bold text-[#313131] text-[20px] leading-[32px] trackint-[2px]'>We’re unbiased</h2>
        <p className='font-normal text-[#676767] text-[20px] w-[280px] mx-auto leading-[28px] mt-[20px] mb-[20px]'>Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.</p>
      </div>

    </Slider>
  );
}