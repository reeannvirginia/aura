import React, { useEffect } from 'react';
import { Intro, About, Projects, Footer } from './index';

const App = () => {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);
  return (
    <div className={`App theme-summer`}>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
