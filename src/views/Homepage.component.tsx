import React, { useEffect, useState } from 'react';
import { FloatingText } from '../components';
import { skills } from '../utils/constants';

const Homepage = () => {
  const [intro, setIntro] = useState('');
  const storedMode = localStorage.getItem('theme');
  const mode = storedMode ? JSON.parse(storedMode) : 'light';

  useEffect(() => {
    const str = 'Hello, my name is Reeann.';
    let i = 0;
    let complete = false;
    const typeWriter = () => {
      if (i < str.length && !complete) {
        setIntro((txt: string) => txt + str.charAt(i));
        i++;
        return setTimeout(typeWriter, 100);
      }
      complete = true;
      setTimeout(_ => (complete = true), 10000);
      if (i === str.length || (complete && i > str.length - 5)) {
        setIntro((txt: string) => txt.substring(0, i));
        i--;
        return setTimeout(typeWriter, 200);
      }
      setTimeout(_ => setIntro((txt: string) => txt + '.'), 100);
    };
    setTimeout(() => typeWriter(), 1000);
  }, []);

  return (
    <div className="homepageContainer">
      <div className="introduction">
        <h1 className={`name ${mode}`}>{intro}&nbsp;</h1>
        <h3 className={`tagline ${mode}`}>I'm a frontend developer based in Miami, FL.</h3>
        <h3 className={`tagline ${mode}`}>I like building clean, modern interfaces.</h3>
      </div>
      {/* <div className="skillsCloud">
        {skills.map((skill, idx) => (
          <FloatingText key={skill} text={skill} idx={idx} />
        ))}
      </div> */}
    </div>
  );
};

export default Homepage;
