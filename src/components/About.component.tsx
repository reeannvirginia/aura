import React from 'react';
import { profile } from '../assets';

const About = () => {
  return (
    <div id="ABOUT" className="aboutContainer">
      <div className="aboutWrapper">
        <div className="header">
          <h2>About me</h2>
        </div>
        <div className="image">
          <img className="profileImg" src={profile} alt="profile" />
        </div>
        <div className="aboutDescription">
          <p>
            My name is Reeann, but I commonly go by Ree. I&apos;m based in sunny Miami as a professional web developer
            and practicing designer.
          </p>
          <p>
            I began my programming journey in 2017 and I quickly fell in love with making reliable and interactive UIs
            in an ever-changing front end ecosystem. I&apos;m excited by subtle animations, conversations about design
            and delivering an intuitive user experience in a complex workflow.
          </p>
          <p>
            As a feature team lead, I worked more closely with product managers and designers to tackle our users&apos;
            biggest challenges and deliver features that help simplify their workday.
          </p>
          <p>
            In my down time, I maintain balance with exercise, reading, being outside (fighting off mosquitoes) and
            working towards my goal of owning a dog [or two].
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
