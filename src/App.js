import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
      <Navigation scrolling={scrolling} />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
