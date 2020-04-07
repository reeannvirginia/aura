import React, { useState } from 'react';
import classNames from 'classnames';
import { Project } from '../components';
import { projects } from '../utils/constants';

interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  highlights: string;
  role?: string;
}

const Work = () => {
  const [activeProject, setActive] = useState<string | null>(null);

  return (
    <div className="workContainer">
      <div className="header">
        <h2>projects</h2>
      </div>
      <div className="workDescription">
        <div className={classNames('close', { showClose: activeProject })} onClick={() => setActive(null)}>
          <i className="fas fa-times" />
        </div>
        {projects.map((project: Project) => (
          <Project
            key={project.name}
            setActive={setActive}
            project={project}
            isActive={activeProject === project.name}
            isHidden={activeProject && activeProject !== project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
