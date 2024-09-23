import React from 'react';
import './PictureGallery.css';

const galleryItems = [
  {
    imgSrc: '/images/product1.jpg',
    name: 'Product 1',
    description: 'High-quality packaging material for food products.',
  },
  {
    imgSrc: '/images/product2.jpg',
    name: 'Product 2',
    description: 'Durable and eco-friendly paperboard packaging.',
  },
  {
    imgSrc: '/images/product3.jpg',
    name: 'Product 3',
    description: 'Flexible pouches for dairy products with advanced sealing.',
  },
  {
    imgSrc: '/images/product4.jpg',
    name: 'Product 4',
    description: 'Laminated packaging for tobacco and other products.',
  },
];

function PictureGallery() {
  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Our Products</h1>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.imgSrc} alt={item.name} className="gallery-image" />
            <div className="gallery-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PictureGallery;
