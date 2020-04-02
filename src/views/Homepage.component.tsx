import React, { useEffect, useState } from 'react';
import { skills } from '../utils/constants';

const Homepage = () => {
  const [intro, setIntro] = useState('');
  const [skill, setSkill] = useState(skills[0]);

  useEffect(() => {
    let [i, complete, skillIdx] = [0, false, 0];
    const updateSkill = setInterval(_ => {
      setSkill(skills[skillIdx]);
      skillIdx < skills.length - 1 ? skillIdx++ : (skillIdx = 0);
    }, 1000);
    const str = 'Hello, my name is Reeann.';
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
    return () => clearInterval(updateSkill);
  }, []);

  return (
    <div className="homepageContainer">
      <div className="introduction">
        <h1 className="name">{intro}&nbsp;</h1>
        <h3 className="tagline">I&apos;m a frontend developer based in Miami, FL.</h3>
        <h3 className="tagline">I like building simple experiences for complex problems.</h3>
        <h3 className="tagline">
          I have fun with <span className="text">{skill}.</span>
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
