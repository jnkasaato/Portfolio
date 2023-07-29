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
    // Function to handle scrolling event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Update scrolling state based on the scroll position
      setScrolling(scrollPosition > 50);
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
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
