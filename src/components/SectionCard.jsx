

const SectionCard = ({ImgSrc, cardHeading, cardParagraph, cardBottom, icon, className}) => {
    return (
        <>
            <div className={`${className} w-[370px] text-center py-9.5 px-11.25`}>
                <img className='mx-auto' src={ImgSrc} alt="#" />
                <h2 className='text-[18px] pt-7.75'>{cardHeading}</h2>
                <p className={`font-normal w-[280px] mx-auto leading-[28px] pt-5 pb-2.5`}>{cardParagraph}</p>
                <h5 className='flex justify-center items-center gap-[5px] text-[20px]'>{cardBottom} {icon} </h5>
            </div>
        </>
    )
}

export default SectionCard
