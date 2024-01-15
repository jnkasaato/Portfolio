import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Overlay from './components/Overlay'
import Overlay2 from './components/Overlay2'

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
    <Overlay/>
      <Overlay2/>
    <div className='app'>
      
        <Navbar scrolling={scrolling} />
    <div className='decor'>
      <div className='decor1'>
        <div className=' line1'></div>
        <img src='/react.png'/>
        <img src='/js.png'/>
        <img src='/html.png'/>
        <img src='/css.png'/>
      </div>
      <div className=' decor2'>
       <h1> jordananamutebi.com</h1>
       <div className='line2'></div>
    </div>
    </div>
        <Welcome/>
        <Projects/>
        <Contact/>
    </div>
    </div>
  );
}

export default App;
