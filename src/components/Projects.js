import myProjects from './MyProjects.json';
import React, { useRef, useEffect } from 'react';

function Projects() {
	const floatIn1 = useRef(null);
  const floatIn2 = useRef(null);
  const floatIn3 = useRef(null);
  const floatIn4 = useRef(null);
  const floatIn5 = useRef(null);

    useEffect(() => {
        applyFloatInAnimation(floatIn1);
        applyFloatInAnimation(floatIn2);
        applyFloatInAnimation(floatIn3);
        applyFloatInAnimation(floatIn4);
        applyFloatInAnimation(floatIn5);
    }, []);

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

  const floatRef = [ floatIn1, floatIn2, floatIn3, floatIn4, floatIn5]

	return (
		<div className='projects-container'  >
			<div className='projects'  >
				<div  ref={floatIn1} className="projects__title relative rel-bottom floating-div" id="projects">
					<h1>02.</h1>
					<h4>Projects</h4>
				</div>
				{myProjects.projects.map ((project) => (
				<div ref = {floatRef[project.id]} className="floating-div" key={`project${project.id}`}>
					<div className={`project relative project-${project.side}`} >
						<div className={`project-image ${project.side}-img relative `}>
							<img src={`/${project.finder}.jpg`} alt={project.name} href={project.site} target="_blank" />
						</div>
						<div className={`project-info ${project.side}`}>
							<h1>P.{project.id}</h1>
							<h5>{project.name}</h5>
							<div className="info-box">
								<p>{project.description}</p>
							</div>
							<h1 className = "tech">{project.tech}</h1>
							<div className="my-links">
								<a href={project.site} target="_blank" className="icons" rel="noopener noreferrer"><p>Live Demo ></p></a>
								<a href={project.code} target="_blank" className="icons" rel="noopener noreferrer"><p>Source Code ></p></a>
							</div>
						</div>
					</div>
				</div>
			))}


				
			</div>
		</div>
	);
}

export default Projects;
