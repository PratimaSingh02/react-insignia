import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Banner from './components/Banner';
import Help from './sections/Help';
import Features from './sections/Features';
import Download from './sections/Download';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Banner overflow='hidden' height='auto'><Help/></Banner>
      <Banner overflow='hidden' height='auto'><Features/></Banner>
      <Banner overflow='visible' height='350px'><Download/></Banner>
      <Banner overflow='hidden' height='auto'><Testimonials/></Banner>
      <Newsletter/>
      <Footer/>
      <div className='copyright'>
      <p >© Insignia™, 2020. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
