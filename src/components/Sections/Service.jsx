import Container from '../Container';
import Flex from '../Flex';
import SectionCard from '../SectionCard';
import SectionHeading from '../SectionHeading';
import { FaArrowRight } from "react-icons/fa";
import HomeImg from '/src/assets/HomeInsurance.png';
import LifeImg from '/src/assets/LifeInsurance.png';
import CarImg from '/src/assets/CarInsurance.png';


const Service = () => {
    return (
        <>
            <Container className='pt-32.5'>
                <SectionHeading
                    title={"OUR SERVICES"}
                    heading={"Insurance made simple for you"}
                    paragraph={"We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."}
                />
                <Flex className="justify-between">
                    <SectionCard
                        className="mt-38.75 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[10px]"
                        ImgSrc={HomeImg}
                        cardHeading={"Home insurance"}
                        cardParagraph={"Home insurance is a type of insurance policy that provides cover for your home."}
                        cardBottom={"Learn more"}
                        icon={<FaArrowRight/>}                    
                    />
                    <SectionCard
                        className="mt-12 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[10px]"
                        ImgSrc={LifeImg}
                        cardHeading={"Life insurance"}
                        cardParagraph={"Helping you bridge gaps in your health care coverage during times of transition."}
                        cardBottom={"Learn more"}
                        icon={<FaArrowRight/>}
                    />
                    <SectionCard
                        className="mt-38.75 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-[10px]"
                        ImgSrc={CarImg}
                        cardHeading={"Car insurance"}
                        cardParagraph={"Car insurance is a type of insurance policy that provides cover for your car."}
                        cardBottom={"Learn more"}
                        icon={<FaArrowRight/>}
                    />
                </Flex>
            </Container>
        </>
    )
}

export default Service
