import React, { useState, useEffect } from 'react';
import { Project as ProjectComponent } from '../components';
import { projects } from '../utils/constants';
import { Project } from '../utils/types';

const Work = () => {
  const [activeProject, setActive] = useState<string | null>(null);
  const [fullView, setFullView] = useState<boolean>(false);

  useEffect(() => {
    const projectSelected = setTimeout(() => {
      setFullView(activeProject ? true : false);
    }, 500);
    return () => clearTimeout(projectSelected);
  }, [activeProject]);

  return (
    <div className="workContainer">
      <div className="header">
        <h2>projects</h2>
      </div>
      <div id="work" className="workDescription">
        {projects.map((project: Project) => (
          <ProjectComponent
            key={project.name}
            setActive={setActive}
            project={project}
            fullView={fullView}
            isActive={activeProject === project.name}
            isHidden={!!activeProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
