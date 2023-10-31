import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

function Navbar({ scrolling }) {
  const navbar = useRef(null);

  const applyFloatInAnimation = (divRef) => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        divRef.current.classList.add('float-in');
      }
    });

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    applyFloatInAnimation(navbar);
  }, []);

  return (
    <div className={`navbar relative ${scrolling ? 'scrolling' : ''}`} ref={navbar}>
      <div className="navbar__icon">
        <img src={logo} height="50px" alt="Logo" />
      </div>
      <div className="navbar__links">
        <Link to="about-me" smooth={true} duration={1000} offset={-0}>
          <h1>About Me</h1>
        </Link>
        <Link to="projects" smooth={true} duration={1300} offset={-100}>
          <h1>Projects</h1>
        </Link>
        <Link to="contact" smooth={true} duration={2000} offset={-100}>
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
