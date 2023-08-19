import finance from '../assets/finance.png';
import tokenexchange from '../assets/tokenexchange.jpg';
import adopt from '../assets/adopt.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import github from '../assets/github.png';
import site from '../assets/site.png';
import myProjects from './MyProjects';
import React, { useRef, useEffect } from 'react';

function Projects() {
  const project1DivRef = useRef(null);
  const project2DivRef = useRef(null);
  const project3DivRef = useRef(null);
  const project4DivRef = useRef(null);
  const projectsDivRef = useRef(null);

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
    applyFloatInAnimation(project1DivRef);
    applyFloatInAnimation(project2DivRef);
    applyFloatInAnimation(project3DivRef);
    applyFloatInAnimation(project4DivRef);
    applyFloatInAnimation(projectsDivRef);
    
  }, []);


	const projects = myProjects.projects;
	const project1 = projects.find(project => project.id === 1);
	const project2 = projects.find(project => project.id === 2);
	const project3 = projects.find(project => project.id === 3);
	const project4 = projects.find(project => project.id === 4);


	return (
		<div className='projects '  >
			<div  ref={projectsDivRef} className="relative rel-bottom floating-div" id="projects">
				<h1>02.</h1>
				<h4>Projects</h4>
			</div>

			<div ref={project1DivRef} className="project relative floating-div">
				<div className="project-image relative">
					<img src={finance} alt="finance" />
					<div className="overlay project-cover">
					</div>
				</div>
				<div className="project-info odd">
					<h1>P.1</h1>
					<h5>{project1.name}</h5>
					<div className="info-box">
						<p>{project1.description}</p>
					</div>
					<h1 className = "tech">{project1.tech}</h1>
					<div className="my-links">
						<a  href={project1.site} target="_blank" className="icons"><p>Live Demo ></p></a>
						<a href={project1.code} target="_blank" className="icons"><p>Code ></p></a>
					</div>
				</div>
			</div>

			<div ref={project2DivRef} className="project relative floating-div">
				<div className="project-image even-img relative ">
					<img src={tokenexchange} alt="ecommerce" />
					<div className="overlay project-cover">
					</div>
				</div>
				<div className="project-info even">
					<h1>P.2</h1>
					<h5>{project2.name}</h5>
					<div className="info-box">
						<p>{project2.description}</p>
					</div>
					<h1 className = "tech">{project2.tech}</h1>
					<div className="my-links">
						<a href={project2.site} target="_blank" className="icons"><p>Live Demo ></p></a>
						<a href={project2.code} target="_blank" className="icons"><p>Source Code ></p></a>
					</div>
				</div>
			</div>

			<div ref={project3DivRef} className="project relative floating-div">
				<div className="project-image relative">
					<img src={adopt} alt="portrait" />
					<div className="overlay project-cover">
					</div>
				</div>
				<div className="project-info odd">
					<h1>P.3</h1>
					<h5>{project3.name}</h5>
					<div className="info-box">
						<p>{project3.description}</p>
					</div>
					<h1 className = "tech">{project3.tech}</h1>
					<div className="my-links">
						<a  href={project3.site} target="_blank" className="icons"><p>Live Demo ></p></a>
						<a href={project3.code} target="_blank" className="icons"><p>Source Code ></p></a>
					</div>
				</div>
			</div>

			<div ref={project4DivRef} className="project relative floating-div">
				<div className="project-image relative even-img" >
					<img src={ecommerce} alt="ecommerce" />
					<div className="overlay project-cover">
					</div>
				</div>				<div className="project-info even">
					<h1>P.4</h1>
					<h5>{project4.name}</h5>
					<div className="info-box">
						<p>{project4.description}</p>
					</div>
					<h1 className = "tech">{project4.tech}</h1>
					<div className="my-links">
						<a href={project4.site} target="_blank" className="icons"><p>Live Demo ></p></a>
						<a href={project4.code} target="_blank" className="icons"><p>Source Code ></p></a>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Projects;
