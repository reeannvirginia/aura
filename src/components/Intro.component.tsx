import React from 'react';
import { navItems } from '../utils/constants';
import { intro } from '../assets';

const Intro = () => {
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="introContainer">
      <div className="introWrapper">
        <h4>REEANN HANSEN</h4>
        <div className="navItems">
          {navItems.map(({ display }) => (
            <h4 onClick={() => scrollIntoView(display)} key={display}>
              {display}
            </h4>
          ))}
        </div>
        <div className="greeting">
          <h1>
            <span className="wave">👋</span> Hey I&apos;m Reeann, front-end developer & aspiring designer.
          </h1>
          <h2>I like to build creative, interactive web apps with React & pixel-perfect CSS.</h2>
          <a href="mailto:reeannvirginia@gmail.com">
            <button className="helloButton">SAY HELLO</button>
          </a>
        </div>
        <img className="introImg" src={intro} alt="intro" />
      </div>
    </div>
  );
};

export default Intro;
