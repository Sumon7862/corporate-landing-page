import './App.css'
import Apply from './components/Sections/Apply';
import Banner from './components/Sections/Banner'
import Benefits from './components/Sections/Benefits';
import NavBar from './components/Sections/NavBar'
import Quote from './components/Sections/Quote';
import Service from './components/Sections/Service';
import Testimonial from './components/Sections/Testimonial';
import Tips from './components/Sections/Tips';

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Service/>
      <Quote/>
      <Benefits/>
      <Tips/>
      <Testimonial/>
      <Apply/>
    </>
  )
}

export default App
