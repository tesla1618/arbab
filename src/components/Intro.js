import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector('.intro-section');
      const rect = introSection.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 1.2;

      if (rect.top <= triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`intro-section ${isVisible ? 'active' : ''}`}>
      <div className="intro-content">
        <div className="intro-text">
          <h2>About Our Company</h2>
          <p>
            At Arbab, we specialize in delivering high-quality packaging solutions to our clients.
            We pride ourselves on our innovative approaches and our commitment to excellence in
            every project we undertake. Our team is dedicated to ensuring customer satisfaction and
            offering solutions that are both sustainable and cost-efficient.
          </p>
        </div>
        <div className="intro-image">
          <img src="images/arbab_office.jpg" alt="Company" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
