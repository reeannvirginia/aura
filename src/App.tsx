import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Sidebar, Toggle, Headline } from './components/index';
import { Homepage, About, Work, Contact } from './views';
import { pages, links } from './utils/constants';
import { useStickyTheme } from './utils/custom_hooks';

const App = () => {
  const [value, setValue] = useStickyTheme();

  return (
    <BrowserRouter>
      <div className={`App theme-${value}`}>
        <div className="wrapper">
          <Sidebar pages={pages} links={links} />
          <Toggle className="darkModeToggle" darkMode={value} onChange={setValue} />
          <Headline />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
