import React from 'react';
import './aantCosmetics.css';  // Import the corresponding CSS

function AantCosmetics() {
  return (
    <div className="aant-cosmetics-container">
      <div className="aant-cosmetics-image">
        <img src="/images/aant-cosmetics.jpg" alt="Aant Cosmetics" />
      </div>
      <div className="aant-cosmetics-description">
        <h2>Aant Cosmetics</h2>
        <p>Aant Cosmetics specializes in producing high-quality cosmetic packaging solutions. Our products are designed to enhance the beauty and functionality of cosmetic items while ensuring sustainability and innovation in packaging design.</p>
      </div>
    </div>
  );
}

export default AantCosmetics;
