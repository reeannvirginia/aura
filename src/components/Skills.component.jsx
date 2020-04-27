import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { skills, work, responsive } from '../utils/constants';

const Dot = ({ active, onClick }) => {
  return <div onClick={onClick} className={`dot ${active && 'active'}`} />;
};

const Skills = () => {
  const levelDisplay = level => {
    let str = '';
    for (let i = 0; i < level; i++) {
      str += '⭐️';
    }
    return str;
  };

  return (
    <div id="EXPERIENCE" className="experienceContainer">
      <Carousel showDots customDot={<Dot />} arrows={false} responsive={responsive}>
        <div className="experienceWrapper">
          <div className="header">
            <h2>skills & strengths</h2>
          </div>
          <div className="skillsGrid">
            {skills.map(({ display, level }) => (
              <div key={display} className="skill">
                <h3>{display}</h3>
                <h3>{levelDisplay(level)}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="experienceWrapper">
          <div className="header">
            <h2>experience</h2>
          </div>
          <div className="workGrid">
            {work.map(({ display, title, role, time, projects }) => (
              <div key={display} className="work">
                <h3>
                  {title} @ <span className="workName">{display}</span>
                </h3>
                <p>{time}</p>
                <ul className="responsibilities">
                  <li>
                    <p>{role}</p>
                  </li>
                  <li>
                    <p>{projects}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;
