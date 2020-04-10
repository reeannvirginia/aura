import React, { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { ProjectProps } from '../utils/types';

const Project = ({ project, setActive, isActive, isHidden, fullView }: ProjectProps) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setActive(project.name);

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    setActive(null);
    setHidden(true);
    setTimeout(() => {
      setHidden(false);
    }, 600);
  };

  return (
    <div
      className={classNames('projectSquare', {
        activeProject: isActive && fullView,
        removed: fullView && !isActive && !hidden,
        hidden: (isHidden && !fullView) || hidden,
        disabled: !project.url,
      })}
      onClick={handleClick}
    >
      <div className="close" onClick={handleClose}>
        <i className="fas fa-times" />
      </div>
      {project.image && <img src={project.image} alt={project.name} />}
      <h3 className="projectTitle">{project.name}</h3>
      <div className="details">
        <h3 className="description">{project.name}</h3>
        <span className="description">{project.description}</span>
        <span className="description">{project.highlights}</span>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        )}
      </div>
    </div>
  );
};

export default React.memo(Project);
