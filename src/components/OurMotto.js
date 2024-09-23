import React from 'react';
import './OurMotto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faSmile, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function OurMotto() {
  return (
    <section className="our-motto">
      <h2>Our Motto</h2>
      <p>
        Arbab loves to conquer the Highest peak on the territory of the client satisfaction by offering an innovative range of packaging solutions at competitive prices. Our well-trained and dynamic workforce is our biggest asset that helps us in realizing all our business objectives.
      </p>
      
      <div className="motto-item-container">
        <div className="motto-columns">
          <div className="motto-column">
            <div className="motto-item">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <div>
                <h3>Secure Business</h3>
                <p>
                  Arbab is empowered with state-of-the-art management policy and well-trained workforce to manufacture premium grade solutions at highly competitive prices.
                </p>
              </div>
            </div>
            
            <div className="motto-item">
              <FontAwesomeIcon icon={faHandshake} className="icon" />
              <div>
                <h3>Company Offers</h3>
                <p>
                  The Company Offers a comprehensive range of products such as Paper & Paper Board Products, Laminates, Rolls & Pouches, Paper packaging materials, dairy products pouches, snack packs, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="motto-column">
            <div className="motto-item">
              <FontAwesomeIcon icon={faSmile} className="icon" />
              <div>
                <h3>Customer Satisfaction</h3>
                <p>
                  Our aim is to be on the leading edge of technological development as well as to keep supporting our clients & aid them with creative, competitive, and well-informed solutions which will help them to drive costs down.
                </p>
              </div>
            </div>

            <div className="motto-item">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <div>
                <h3>Innovative Solutions</h3>
                <p>
                  We continuously invest in research and development to bring innovative packaging solutions that meet evolving market demands while ensuring sustainability and cost-efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMotto;
