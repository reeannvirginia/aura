import React, { useEffect } from 'react';
import { Intro, About, Projects, Skills, Footer } from './components';

const App = () => {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);
  return (
    <div className={`App theme-deco`}>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
