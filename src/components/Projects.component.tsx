import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { projects } from '../utils/constants';
import { Project } from '../utils/types';

const Projects: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const callback = (entries: { isIntersecting: boolean }[]) => {
    if (display) return;
    setDisplay(entries[0].isIntersecting);
  };
  const observer = new IntersectionObserver(callback, { root: projectsRef.current });

  useEffect(() => {
    const divRef = projectsRef.current;
    observer.observe(divRef);
    if (display) observer.unobserve(divRef);
    return () => observer.unobserve(divRef);
  }, [display, observer]);
  return (
    <>
      <section id="Projects" className="projectBlockContainer">
        <div className={classNames('blockContent', { animateBlock: display })}>
          <h2 className="blockSubtitle">Recent work and projects.</h2>
          <h4 className="sectionCaption" ref={projectsRef}>
            Over the past three years, front-end has been my passion. From building static sites to dynamic interfaces,
            developing component libraries to brain-storming UI architecture, I love seeing apps come to life and
            finding ways to engage the user.
          </h4>
        </div>
      </section>
      <section className="projects" ref={projectsRef}>
        <div className={classNames('projectsContent', { animateProjects: display })}>
          {projects.map((project: Project) => (
            <div key={project.name} className="project">
              <img className="projectImage" src={project.image} alt={project.name} />
              <div className="projectInfo">
                <h4 className="projectTitle">{project.name}</h4>
                <p className="description">{project.description}</p>
                <p className="description">Built with {project.highlights}</p>
                {project.url && (
                  <a href={project.url} className="siteLink" target="_blank" rel="noopener noreferrer">
                    Visit Site <i className="fas fa-chevron-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
