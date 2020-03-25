import React, { memo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';

interface Headline {
  [key: string]: string;
}

const headlines: Headline = {
  about: 'about me',
  work: 'recent work and projects',
  contact: "let's work together!",
};

const Headline = () => {
  const { transition } = useContext(AppContext);
  const { pathname } = useLocation();
  const currentPath: string = pathname.split('/')[1];
  if (!currentPath || transition) return <div />;
  return <h1 className="headline">{headlines[currentPath]}</h1>;
};

export default memo(Headline);
