import Container from '../Container'
import SectionHeading from '../SectionHeading'
import Flex from '../Flex';
import SectionCard from '../SectionCard';
import TipsImg1 from '/src/assets/TipsPic1.png';
import TipsImg2 from '/src/assets/TipsPic2.png';
import TipsImg3 from '/src/assets/TipsPic3.png';

const Tips = () => {
  return (
    <>
      <Container className='py-32.5'>
        <SectionHeading
            title={"Our Tips For You"}
            heading={"Reinventing Your Protection"}
            paragraph={"We share common trends, strategies ideas, opinion, short & log stories from the team behind company"}
        />
        <Flex className="justify-between">
                    <SectionCard
                        className="mt-12 rounded-[10px]"
                        ImgSrc={TipsImg1}                
                    />
                    <div className='w-[370px] h-115 text-center py-9.5 px-11.25 mt-7 rounded-[10px]'>
                        <img className='mx-auto' src={TipsImg2} alt="#" />
                        <h2 className='!font-semibold text-[16px] pt-5 pb-2.5'>How to prevent and protect your family from Carbon monoxide</h2>
                        <p className="font-normal w-[280px] mx-auto">We share common trends, strategies ideas, opinion, short & log stories from the team behind company.</p>
                    </div>
                    <SectionCard
                        className="mt-12 rounded-[10px]"
                        ImgSrc={TipsImg3}                
                    />
                </Flex>
      </Container>
    </>
  )
}

export default Tips
