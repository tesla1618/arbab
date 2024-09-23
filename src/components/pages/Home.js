import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import DirectorSection from '../DirectorSection';
import OurMotto from '../OurMotto';
import Clients from '../clients';
import Intro from '../Intro';
function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <DirectorSection />
      <OurMotto />
      <Cards />
      <Clients />
      <Footer />
    </>
  );
}

export default Home;
