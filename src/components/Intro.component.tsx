import React from 'react';
import { navItems } from '../utils/constants';

const Intro = () => {
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // const dots = () => {
  //   return dotTimes.map((t, i) => (
  //     <span key={String(t)} className="dot" style={{ bottom: `${(i / 14) * 100 + 3}%`, left: i % 2 ? '3%' : '5%' }} />
  //   ));
  // };

  return (
    <div className="introContainer">
      <div className="introContent">
        <header>
          <div className="logo">RH</div>
          <div className="navItems">
            {navItems.map((display) => (
              <h4 key={display} onClick={() => scrollIntoView(display)}>
                {display}
              </h4>
            ))}
          </div>
        </header>
        <div className="greeting">
          <h1 className="helloMesg">Hello there!</h1>
          <h1 className="nameMesg">My name is Reeann.</h1>
          <h1 className="devMesg">
            I'm a <span>front-end developer</span>
          </h1>
          <h1 className="desMesg">
            & <span>aspiring designer</span>.
          </h1>
        </div>
        <a className="sayHello" href="mailto:reeannvirginia@gmail.com" target="_blank" rel="noopener noreferrer">
          SAY HELLO
        </a>
        {/* {dots()} */}
      </div>
    </div>
  );
};

export default Intro;
