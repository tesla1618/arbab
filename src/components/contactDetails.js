import React from 'react';
import './contactDetails.css';

function ContactDetails() {
  return (
    <div className="contact-container">
      <h2>Contact Arbab Pack</h2>
      <div className="contact-details">
        <div className="contact-item" data-aos="fade-up">
          <h3>Head Office</h3>
          <p>Address: 1234 Main Street, Dhaka, Bangladesh</p>
          <p>Phone: +880 1234 567890</p>
          <p>Email: info@arbabgroup.com</p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
          <h3>Customer Support</h3>
          <p>Phone: +880 9876 543210</p>
          <p>Email: support@arbabgroup.com</p>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
          <h3>Sales Inquiries</h3>
          <p>Phone: +880 1111 222233</p>
          <p>Email: sales@arbabgroup.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
