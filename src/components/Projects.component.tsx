import React from 'react';
import { projects } from '../utils/constants';
import { Project } from '../utils/types';

const Projects = () => {
  return (
    <div id="PROJECTS" className="projectContainer">
      <div className="projectWrapper">
        <div className="header">
          <h2>Projects</h2>
        </div>
        {projects.map((project: Project) => (
          <>
            <div className="image">
              <img src={project.image} alt={project.name} />
            </div>
            <div>
              <h3 className="projectTitle">{project.name}</h3>
              <p className="description">{project.description}</p>
              <p className="description">Tech used: {project.highlights}</p>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Site
                </a>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
