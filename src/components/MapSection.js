import React, { useEffect } from 'react';
import './mapSection.css';

const MapSection = () => {
  useEffect(() => {
    // Initialize the Google Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 23.8103, lng: 90.4125 }, // Coordinates of Dhaka, Bangladesh
      zoom: 15, // Adjust the zoom level
    });

    // Create a marker for Arbab Pack Ltd location
    new window.google.maps.Marker({
      position: { lat: 23.8103, lng: 90.4125 }, // Set the position of Arbab Pack Ltd
      map,
      title: 'Arbab Pack Ltd',
    });
  }, []);

  return (
    <div className="map-container">
      <h2>Our Location</h2>
      <div id="map"></div>
    </div>
  );
};

export default MapSection;
