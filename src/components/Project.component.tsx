import React, { SetStateAction, Dispatch } from 'react';
import classNames from 'classnames';

interface ActiveProject {
  name: string;
  description: string;
  image: string;
  url: string;
  highlights: string;
  role?: string;
}

export interface Project {
  isActive: boolean;
  isHidden: boolean | null | '';
  project: ActiveProject;
  setActive: Dispatch<SetStateAction<string | null>>;
}

const Project = ({ project, setActive, isActive, isHidden }: Project) => {
  const background = `url(${window.location.origin + '/' + project.image}) top`;
  return (
    <div
      style={{ background }}
      className={classNames('projectBubble', { projectContainer: isActive, isHidden })}
      onClick={isActive ? undefined : () => setActive(project.name)}
    >
      <div className={classNames('projectDescription', { isActive })}>
        <h3 className="projectTitle">{project.name}</h3>
        <div className="details">
          <span className="description">{project.description}</span>
          <span className="description">{project.highlights}</span>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
