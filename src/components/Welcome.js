import portrait from '../assets/portrait.jpg';
import React, { useRef, useEffect } from 'react';

function Welcome() {
  const welcomeDivRef = useRef(null);
  const aboutMeDivRef = useRef(null);

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
    applyFloatInAnimation(welcomeDivRef);
    applyFloatInAnimation(aboutMeDivRef);
  }, []);

	return(
	<div>
		<div ref={welcomeDivRef} className="welcome floating-div">
			<h1>Hi, my name is </h1>
			<h2>Jordana.</h2>
			<h3>Web Developer.</h3>
			<p>Hi I'm Jordana, a software developer with a passion for crafting elegant solutions to complex problems. I’m dedicated to continuous learning and I strive to always turn innovative ideas into functional, user-centric applications.</p>
		</div>
		<div className="about" >
			<div ref={aboutMeDivRef} className="about-me floating-div" id="about-me">
				<div className="relative rel-bottom">
					<h1>01.</h1>
					<h4>About Me</h4>
				</div>
				<div className="relative ">
					<p>
						Hello, I'm Jordana, a software developer based in Boston. With a a huge curiosity for solving intricate challenges, I thrive on crafting solutions that bridge the gap between complexity and user-centric design. My journey is defined by a relentless pursuit of knowledge, as I am committed to constant growth and evolution in the ever-evolving world of technology. With a diverse toolkit of programming languages and a knack for innovation, I'm on a mission to transform imaginative concepts into tangible, impactful applications.<br/><br/> Here are a few technologies I've been working with recently:
					</p>
				</div>
				<div className="technologies relative">
					<p>	
						<li>Javascript</li>
						<li>React</li>
						<li>Solidity</li>
					</p>
					<p className="tech-li">
						<li>Node.js</li>
						<li>Hardhat</li>
						<li>Ethers.js</li>
					</p>
				</div>
			</div>
		</div>
	</div>
	);
}; export default Welcome;