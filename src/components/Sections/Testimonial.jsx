import Container from "../Container"
import SectionHeading from '../SectionHeading'
import Flex from '../Flex';
import Rating from '/src/assets/Ratings.png'
import Avatar1 from '/src/assets/Avatar1.png'
import Avatar2 from '/src/assets/Avatar2.png'
import Avatar3 from '/src/assets/Avatar3.png'
import verify from '/src/assets/verify.svg';


const Testimonial = () => {
    return (
        <>
            <Container>
                <SectionHeading
                    title={"TESTIMONIAL"}
                    heading={"What Our Customer Have To Says"}
                    paragraph={"We share common trends, strategies ideas, Opinion, short & log stories from the team behind company"}
                />
                <Flex className='justify-between'>
                    <div className="px-10 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] w-[370px] rounded-xl mt-12">
                        <img className="pt-13" src={Rating} alt="#" />
                        <p className="pt-5 pb-7.5">I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className="flex items-center gap-5">
                            <div>
                                <img className="mb-[48px]" src={Avatar1} alt="#" />
                            </div>
                            <div>
                                <h2 className='text-[20px]mb-[10px]'>Daniel Anderson</h2>
                                <div className='flex items-center gap-[5px]'>
                                    <img className='mb-[48px] w-[15%] h-[15%]' src={verify} alt="#" />
                                    <span className='text-[#676767] text-[14px] italic font-normal mb-[48px]'>Verified customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-14 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] w-[370px] rounded-xl mt-12">
                        <img className="pt-13" src={Rating} alt="#" />
                        <p className="pt-5 pb-7.5">I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className="flex items-center gap-5">
                            <div>
                                <img className="mb-[48px]" src={Avatar2} alt="#" />
                            </div>
                            <div>
                                <h2 className='text-[20px]mb-[10px]'>Daniel Anderson</h2>
                                <div className='flex items-center gap-[5px]'>
                                    <img className='mb-[48px] w-[15%] h-[15%]' src={verify} alt="#" />
                                    <span className='text-[#676767] text-[14px] italic font-normal mb-[48px]'>Verified customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-14 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] w-[370px] rounded-xl mt-12">
                        <img className="pt-13" src={Rating} alt="#" />
                        <p className="pt-5 pb-7.5">I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.</p>
                        <div className="flex items-center gap-5">
                            <div>
                                <img className="mb-[48px]" src={Avatar3} alt="#" />
                            </div>
                            <div>
                                <h2 className='text-[20px]mb-[10px]'>Daniel Anderson</h2>
                                <div className='flex items-center gap-[5px]'>
                                    <img className='mb-[48px] w-[15%] h-[15%]' src={verify} alt="#" />
                                    <span className='text-[#676767] text-[14px] italic font-normal mb-[48px]'>Verified customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Flex>
            </Container>
        </>
    )
}

export default Testimonial
