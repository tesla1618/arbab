import React from 'react';
import './AboutUs.css';
import ImageSlider from '../ImageSlider';
import EmployeeQuote from '../EmployeeQuote'; // Import the EmployeeQuote component
import Footer from '../Footer';
import AboutSection from '../AboutSection';
import CompanyProfile from '../CompanyProfile';
import AreaOfActivities from '../AreaOfActivites';

function AboutUs() {
  return (
    <>
      <AboutSection/>
      <ImageSlider/>
      <CompanyProfile />
      <AreaOfActivities />
      <EmployeeQuote/>
      <Footer/>
    </>
  );
}

export default AboutUs;
