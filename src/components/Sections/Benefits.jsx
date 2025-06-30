import Container from '../Container';
import Flex from '../Flex';
import SectionHeading from '../SectionHeading';
import SectionCard from '../SectionCard';
import Img1 from '/src/assets/B1.png';
import Img2 from '/src/assets/B2.png';
import Img3 from '/src/assets/B3.png';
import Img4 from '/src/assets/B4.png';
import Img5 from '/src/assets/B5.png';

const Benefits = () => {
    return (
        <>
            <Container>
                <SectionHeading
                    title={"YOUR BENEFITS"}
                    heading={"We’re Your Right Insurance Advocate"}
                    paragraph={"We work with several leading insurance companies to secure insurance coverages tailored to meet your needs."}
                />
                <Flex className='justify-evenly flex-wrap'>
                    <SectionCard
                        className="mt-12 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:rounded-[10px]"
                        ImgSrc={Img1}
                        cardHeading={"We’re unbiased"}
                        cardParagraph={"Our online tools help you decide what product is best for you. We’re here to insurance plan you choose."}                   
                    />
                    <SectionCard
                        className="mt-12 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:rounded-[10px]"
                        ImgSrc={Img2}
                        cardHeading={"We have the best prices"}
                        cardParagraph={"Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find."}                   
                    />
                    <SectionCard
                        className="mt-12 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:rounded-[10px]"
                        ImgSrc={Img3}
                        cardHeading={"We’re your insurance advocate"}
                        cardParagraph={"We will deal with the insurance companies for you, even after you’ve bought your plan."}                   
                    />
                    <SectionCard
                        className="mt-12 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:rounded-[10px]"
                        ImgSrc={Img4}
                        cardHeading={"We’re availabe 24/7"}
                        cardParagraph={"We have your back 24/7 between our online chat function, email and telephone support."}                   
                    />
                    <SectionCard
                        className="mt-12 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:rounded-[10px]"
                        ImgSrc={Img5}
                        cardHeading={"We make insurance simple"}
                        cardParagraph={"We’re commited to making applying for insurance as simple as can be for our customers."}                   
                    />
                </Flex>

            </Container>

        </>
    )
}

export default Benefits
