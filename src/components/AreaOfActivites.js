import React from 'react';
import './AreaOfActivities.css';
import { FaIndustry, FaPrint, FaRecycle, FaGlobe, FaBoxOpen, FaCut, FaShoppingBag, FaFilm } from 'react-icons/fa';

function AreaOfActivities() {
  return (
    <section className="activities-section">
      <div className="activities-container">
        <h1 className="activities-title">Our Areas of Activities</h1>
        <p className="activities-description">
          Arbab is engaged in process and manufacturing, providing Paper & Paper Board based packaging solutions mainly for British American Tobacco, 
          along with Nestle, Arla Foods, and others.
        </p>
        <div className="activities-list">
          <div className="activity-item">
            <FaIndustry className="activity-icon" />
            <p>Paper/Paper Board Converting as per custom base.</p>
          </div>
          <div className="activity-item">
            <FaPrint className="activity-icon" />
            <p>Multi-Color gravure printings (Up to Ten color with maximum width of 1250MM).</p>
          </div>
          <div className="activity-item">
            <FaRecycle className="activity-icon" />
            <p>Lamination without Adhesive & Solvent.</p>
          </div>
          <div className="activity-item">
            <FaGlobe className="activity-icon" />
            <p>Lamination with and without solvent.</p>
          </div>
          <div className="activity-item">
            <FaBoxOpen className="activity-icon" />
            <p>Extrusion Coating.</p>
          </div>
          <div className="activity-item">
            <FaCut className="activity-icon" />
            <p>Slitting.</p>
          </div>
          <div className="activity-item">
            <FaShoppingBag className="activity-icon" />
            <p>Pouch Making with side/bottom gusseted, Stand up pouches etc.</p>
          </div>
          <div className="activity-item">
            <FaFilm className="activity-icon" />
            <p>Blown Film Making Plant.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreaOfActivities;
