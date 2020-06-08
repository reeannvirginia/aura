import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { profile } from '../assets/index';

const About: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const callback = (entries: { isIntersecting: boolean }[]) => {
    if (display) return;
    setDisplay(entries[0].isIntersecting);
  };
  const observer = new IntersectionObserver(callback, { root: aboutRef.current });

  useEffect(() => {
    const divRef = aboutRef.current;
    observer.observe(divRef);
    if (display) observer.unobserve(divRef);
    return () => observer.unobserve(divRef);
  }, [display, observer]);

  return (
    <>
      <section id="About" className="blockContainer">
        <div className={classNames('blockContent', { animateBlock: display })}>
          <h2 className="blockSubtitle">I'm Reeann, but call me Ree.</h2>
          <h4 className="sectionCaption">
            I began my programming journey in 2017 and I have since worked in building medical software, static sites
            and tools for automation testing. I am excited by animations, conversations about design and delivering
            intuitive, dynamic user experiences.
          </h4>
        </div>
      </section>
      <section id="Experience" className="skills" ref={aboutRef}>
        <div className={classNames('skillsContent', { animateSkills: display })}>
          <div className="skillsColumn">
            <i className="fas fa-laptop-code" />
            <h4>Front-end Developer</h4>
            <p className="description">
              I specialize in creating web apps with React and building beautifully simple interfaces.
            </p>
            <p className="subtitle">Languages I speak:</p>
            <p className="description">JavaScript, React, TypeScript, HTML5, CSS3, SCSS</p>
            <p className="subtitle">Libraries & tools:</p>
            <p className="description">Redux </p>
            <p className="description">GraphQL </p>
            <p className="description">Jest</p>
            <p className="description">Enzyme</p>
            <p className="description">Lodash</p>
          </div>
          <div className="skillsColumn">
            <i className="fas fa-pencil-ruler" />
            <h4>Aspiring Designer</h4>
            <p className="description">
              My design journey has only just begun but it is a crucial part of my web development growth.
            </p>
            <p className="subtitle">Things I'm learning:</p>
            <p className="description">UX/UI, smarter responsive design, color theory, accessibility</p>
            <p className="subtitle">Design tools:</p>
            <p className="description">Adobe XD</p>
            <p className="description">Figma</p>
          </div>
        </div>
      </section>
      <section className="profile">
        <div className="profileContent">
          <div className="profileImage">
            <img src={profile} alt="profile" />
          </div>
          <div className="profileText">
            <p>
              I dove into the world of programming when I moved to Miami in 2017 after living in Germany for 2.5 years,
              and I've never been happier! Aside from writing code, I enjoy outdoor activities, donating my skills and
              working towards my goal of owning a dog.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
