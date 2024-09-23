import React from 'react';
import '../App.css';
import './DirectorSection.css';

const directors = [
  {
    name: 'ZAKIR HOSSAIN NEZUM',
    title: 'Managing Director',
    imgSrc: 'images/zakir_hossain_nezum.png',
  },
  {
    name: 'KANIZ ZEHERA',
    title: 'Chairman',
    imgSrc: '/images/kaniz_zehera.png',
  },
  {
    name: 'ARBAB HOSSAIN',
    title: 'Director',
    imgSrc: '/images/arbab_hossain.png',
  },
  {
    name: 'M M AZMAT HOSSAIN',
    title: 'Director',
    imgSrc: '/images/azmat_hossain.png',
  },
  {
    name: 'M M ADNAN HOSSAIN',
    title: 'Director',
    imgSrc: '/images/adnan_hossain.png',
  },
];

function DirectorSection() {
  return (
    <section className="director-section">
      <h2>Meet Our Board of Directors</h2>
      <div className="director-grid">
        {directors.map((director, index) => (
          <div className="director-card" key={index} style={{ '--i': index }}>
            <img
              src={director.imgSrc}
              alt={director.name}
              className="director-image"
            />
            <div className="director-info">
              <h3>{director.name}</h3>
              <h4>{director.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DirectorSection;
