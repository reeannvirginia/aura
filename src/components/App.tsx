import React, { useEffect } from 'react';
import { Intro, About, Projects, Experience, Footer } from '.';

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
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
