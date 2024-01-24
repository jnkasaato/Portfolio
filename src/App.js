import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolling(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="overlay1"></div>
      <div className="overlay2"></div>
      <div className='app'>
        <Navbar scrolling={scrolling} />
        <Welcome/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
