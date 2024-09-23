import React from 'react';
import './clients.css';

const clients = [
  { name: 'NESTLE', imgSrc: 'images/nestle.png' },
  { name: 'AKIJ GROUP', imgSrc: 'images/akij.png' },
  { name: 'PRAN', imgSrc: 'images/client_three.png' },
  { name: 'SQUARE FOOD & BEVERAGES LTD.', imgSrc: 'images/square.png' },
  { name: 'CITY GROUP', imgSrc: 'images/City-Group-Logo.png' },
  { name: 'LAL TEER', imgSrc: 'images/lal-teer.png' },
  { name: 'DANISH', imgSrc: 'images/danish.png' },
  { name: 'AARONG DAIRY', imgSrc: 'images/aarong_dairy.png' },
  { name: 'AMRITA', imgSrc: 'images/amrita.jpg' },
  { name: 'ARLA', imgSrc: 'images/arla.png' },
  { name: 'QUASEM FOOD PRODUCTS LTD.', imgSrc: 'images/quasem food.png' },
  { name: 'MEGHNA GROUP OF INDUSTRIES', imgSrc: 'images/meghna group.png' },
  { name: 'KALLOL GROUP', imgSrc: 'images/kallol.png' },
  { name: 'SMC ENTERPRISE LTD.', imgSrc: 'images/smc.png' },
  { name: 'BRITISH AMERICAN TOBACCO', imgSrc: 'images/bat.png' },
  { name: 'ABUL KHAIR GROUP', imgSrc: 'images/abul khair.png' },
];

function Clients() {
  return (
    <section className="clients-section">
      <h2>Trusted by many industry leaders and satisfied clients</h2>
      <div className="clients-container">
        <div className="clients-slider">
          {clients.map((client, index) => (
            <div className="client-item" key={index}>
              <img src={client.imgSrc} alt={client.name} className="client-image" />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
          {/* Duplicate the list for continuous scrolling effect */}
          {clients.map((client, index) => (
            <div className="client-item" key={`duplicate-${index}`}>
              <img src={client.imgSrc} alt={client.name} className="client-image" />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
