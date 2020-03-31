import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ContextProvider } from './AppContext';
import { Header, Toggle, Headline, Navigation } from './components/index';
import { Homepage, About, Work, Contact } from './views';
import { useStickyTheme } from './utils/custom_hooks';

const App = () => {
  const [value, setValue] = useStickyTheme();

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className={`App theme-${value}`}>
          <Header />
          <div className="contentContainer">
            <Toggle className="darkModeToggle" darkMode={value} onChange={setValue} />
            <Navigation />
            <div className="content">
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
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
