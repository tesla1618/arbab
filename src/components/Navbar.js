import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/arbab pack ltd.png' alt='Arbab Pack Ltd Logo' className='navbar-logo-img' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                OUR PRODUCTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/innovation'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                INNOVATION
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/certification'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CERTIFICATION
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/future-of-sustainability'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FUTURE OF SUSTAINABILITY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sister-concerns'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SISTER CONCERNS
              </Link>
            </li>
            <li>
              <Link
                to='/contact-us'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;