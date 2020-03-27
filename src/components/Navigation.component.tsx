import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { pages } from '../utils/constants';
import { AppContext } from '../AppContext';

export interface NavItem {
  display: string;
  icon: string;
  url: string;
}

const Navigation = () => {
  const { transition, updateTransition } = useContext(AppContext);
  const [{ pathname }, history] = [useLocation(), useHistory()];
  const [activePage, setActivePage] = useState(pathname);
  const [initial, setInitial] = useState(true);

  useEffect(() => void setInitial(false), []);

  useEffect(() => {
    if (!initial) {
      updateTransition(true);
      setTimeout(() => {
        history.push(activePage);
        setTimeout(() => {
          updateTransition(false);
        }, 1000);
      }, 1000);
    }
  }, [activePage]);

  return (
    <>
      <div className="navigationContainer">
        {pages.map(({ display, url }: NavItem) => (
          <div
            key={display}
            className={classNames('navLink', { active: url === activePage })}
            onClick={() => setActivePage(url)}
          >
            <i className={display} />
          </div>
        ))}
        {/* <span className="attributionLink">
        Icons by &nbsp;{' '}
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
          https://icons8.com
        </a>
      </span> */}
      </div>
      <div className={classNames('overlay', { transition })} />
    </>
  );
};

export default Navigation;
