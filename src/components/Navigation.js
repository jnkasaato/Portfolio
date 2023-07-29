import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import jk from '../assets/jk.png';

function Navigation({ scrolling }) {
  return (
    <div className={`nav ${scrolling ? 'scrolling' : ''}`}>
      <img src={jk} height="80px" alt="Logo" />
      {/* Use Link component from react-scroll for smooth scrolling */}
      <Link to="dapp" smooth={true} duration={1000}>
        SEEDLING
      </Link>
      <Link to="ecommerce" smooth={true} duration={1000}>
        ACCLIMATE
      </Link>
      <Link to="contact" smooth={true} duration={1000}>
        CONTACT
      </Link>
    </div>
  );
}

export default Navigation;
