import React from 'react';
import './zkPlastics.css';  // Import the corresponding CSS

function ZkPlastics() {
  return (
    <div className="zk-plastics-container">
      <div className="zk-plastics-image">
        <img src="/images/zk-plastics.jpg" alt="ZK Plastics" />
      </div>
      <div className="zk-plastics-description">
        <h2>ZK Plastics</h2>
        <p>ZK Plastics is a renowned manufacturer of high-quality plastic products, offering innovative solutions across various industries. Our commitment to excellence and sustainability ensures that we meet the evolving needs of our customers.</p>
      </div>
    </div>
  );
}

export default ZkPlastics;
