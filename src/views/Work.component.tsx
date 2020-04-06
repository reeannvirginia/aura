import React, { useState } from 'react';
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
      {activeProject && (
        <div className="close" onClick={() => setActive(null)}>
          <i className="fas fa-times" />
        </div>
      )}
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
  );
};

export default Work;
