import React from 'react';
import { Header, Toggle } from './components/index';
import { About, Work } from './views';
import { useStickyTheme } from './utils/custom_hooks';

const App = () => {
  const [value, setValue] = useStickyTheme();

  return (
    <div className={`App theme-${value}`}>
      <Header />
      <div className="contentContainer">
        <Toggle className="darkModeToggle" darkMode={value} onChange={setValue} />
        <div className="content">
          <About />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default App;
