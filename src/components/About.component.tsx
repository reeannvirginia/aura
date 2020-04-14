import React, { useState, useEffect } from 'react';
import { skills, skillIcons } from '../utils/constants';

const About = () => {
  const [skill, setSkill] = useState(skills[0]);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
    let skillIdx = 0;
    const updateSkill = setInterval(_ => {
      setSkill(skills[skillIdx]);
      skillIdx < skills.length - 1 ? skillIdx++ : (skillIdx = 0);
    }, 1000);
    return () => clearInterval(updateSkill);
  }, []);

  return (
    <div className="aboutContainer">
      <div className="aboutDescription">
        <p>
          Hi, my name is Reeann. I&apos;m a front end developer with 2+ years programming experience specializing in{' '}
          <span className="text">React</span> and pixel-perfect <span className="text">CSS</span>. I&apos;m excited by
          subtle animations, conversations about design and delivering an intuitive user experience in a complex
          workflow.
        </p>
        <p>
          Recently, my professional experience has involved more interaction and participation with product managers and
          designers to understand clients&apos; problems and deliver features that help simplify their workday.
        </p>
        <p>I maintain balance with exercise, travel, reading and working towards my goal of owning a dog [or two].</p>
        <h3>Skills</h3>
        <div className="skillIcons">
          {skillIcons.map(skill => (
            <i key={skill} className={`devicon-${skill}`} />
          ))}
        </div>
        <p>
          But I also have fun with <span className="text">{skill}.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
