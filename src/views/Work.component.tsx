import React from 'react';
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
  return (
    <div className="workContainer">
      <div className="workGrid">
        {projects.map(({ name, description, image, highlights, url }: Project) => (
          <a key={name} className="projectContainer" href={url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} />
            <div className="projectDescription">
              <span className="description">{name}</span>
              <span className="description">{description}</span>
              <span className="description">{highlights}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
