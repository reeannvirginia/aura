import React from 'react';
import ReeImage from '../assets/profile.png';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutDescription">
        <p>
          I'm a front end developer with 2+ years programming experience specializing in React and pixel-perfect CSS.
          I'm excited by subtle animations, conversations about design and delivering an intuitive user experience in a
          complex workflow.
        </p>
        <p>
          Recently, my professional experience has involved more interaction and participation with product managers and
          designers.
        </p>
        <p>
          I maintain balance with exercise, travel, reading and working towards my goal of owning a dog [or two] one
          day.
        </p>
        <h3>Skills</h3>
        <div className="skillIcons">
          <i className="devicon-javascript-plain" />
          <i className="devicon-react-original" />
          <i className="devicon-typescript-plain" />
          <i className="devicon-html5-plain" />
          <i className="devicon-css3-plain" />
          <i className="devicon-sass-original" />
        </div>
      </div>
      <div className="aboutPhoto">
        <img className="reePhoto" src={ReeImage} alt="profile" />
      </div>
    </div>
  );
};

export default About;
