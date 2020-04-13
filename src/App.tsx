import React from 'react';
import { usePersistingTheme } from 'ree-hooks';
import { Header, Toggle } from './components/index';
import { About, Work } from './views';

const App = () => {
  const [value, setValue] = usePersistingTheme();
  return (
    <div className={`App theme-${value}`}>
      <Header />
      <Toggle className="darkModeToggle" darkMode={value} onChange={setValue} />
      <div className="content">
        <div className="header">
          <h2>about</h2>
        </div>
        <About />
        <div className="header">
          <h2>projects</h2>
        </div>
        <Work />
      </div>
    </div>
  );
};

export default App;
