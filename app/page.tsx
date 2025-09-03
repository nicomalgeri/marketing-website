import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Results from '../components/Results';
import Offer from '../components/Offer';
import About from '../components/About';
import CTABand from '../components/CTABand';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Services />
      <Sectors />
      <Results />
      <Offer />
      <About />
      <CTABand />
      <Contact />
    </>
  );
}
