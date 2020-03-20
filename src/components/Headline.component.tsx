import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

interface Headline {
  [key: string]: string;
}

const headlines: Headline = {
  about: 'about me',
  work: 'recent work and projects',
  contact: 'interested in working together?',
};

const Headline = () => {
  const { pathname } = useLocation();
  const currentPath: string = pathname.split('/')[1];
  if (!currentPath) return <div />;
  return <h1 className="headline">{headlines[currentPath]}</h1>;
};

export default memo(Headline);
