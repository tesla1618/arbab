import React from 'react';
import './OurStrength.css';
import { FaCheckCircle, FaCogs, FaUserShield, FaWarehouse, FaBolt, FaClock, FaTools } from 'react-icons/fa';

function OurStrength() {
  return (
    <section className="strength-section">
      <h1 className="strength-title">Our Strengths</h1>
      <div className="strength-list">
        <div className="strength-item"><FaCheckCircle className="strength-icon" /> Quality Assurances</div>
        <div className="strength-item"><FaCogs className="strength-icon" /> Innovation</div>
        <div className="strength-item"><FaUserShield className="strength-icon" /> Integrity and Responsibility</div>
        <div className="strength-item"><FaWarehouse className="strength-icon" /> High warehouse capacity</div>
        <div className="strength-item"><FaBolt className="strength-icon" /> Uninterrupted Power Capacity</div>
        <div className="strength-item"><FaClock className="strength-icon" /> 33 years professional knowledge in packaging of our Managing Director</div>
        <div className="strength-item"><FaTools className="strength-icon" /> Focus on Paper Related Packaging and also flexible packaging with modern technology and equipment.</div>
        <div className="strength-item"><FaCheckCircle className="strength-icon" /> Services majority for very well-known customers</div>
        <div className="strength-item"><FaUserShield className="strength-icon" /> Professional Management Team</div>
        <div className="strength-item"><FaCheckCircle className="strength-icon" /> Strict Quality Assurance</div>
        <div className="strength-item"><FaTools className="strength-icon" /> Trained & Skilled Workers</div>
      </div>
    </section>
  );
}

export default OurStrength;
