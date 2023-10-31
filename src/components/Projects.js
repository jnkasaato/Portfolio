import myProjects from './MyProjects.json';
import React, { useRef, useEffect } from 'react';

function Projects() {
  const reference2 = useRef(null);
  const reference = useRef(null);

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
    applyFloatInAnimation(reference);
    applyFloatInAnimation(reference2);
  }, []);

	return (
		<div className='projects-container'  >
			<div className='projects'  >
				<div  ref={reference} className="relative rel-bottom floating-div" id="projects">
					<h1>02.</h1>
					<h4>Projects</h4>
				</div>
				<div ref = {reference2} className="floating-div">
				{myProjects.projects.map ((project) => (
					<div className={`project relative project-${project.side}`} >
						<div className={`project-image ${project.side}-img relative `}>
							<img src={`/${project.finder}.jpg`} alt="ecommerce" />
							<div className="overlay project-cover">
							</div>
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
				))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
