import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Logo from '/src/assets/logo.svg'

const NavBar = () => {
    return (
        <>
            <Container>
                <Flex className='mt-[50px] justify-between'>
                    <div className='flex items-center gap-5'>
                        <img src={Logo} alt="#" />
                        <h1 className='font-bold text-4xl text-[#313131]'>Pacific Corp.</h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-10'>
                            <li>Home</li>
                            <li>Pages</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <Button>Call Now</Button>
                    </div>
                </Flex>
            </Container>

        </>
    )
}

export default NavBar
