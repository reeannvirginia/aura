import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { pages, links } from '../utils/constants';
import { AppContext } from '../AppContext';

export interface NavItem {
  display: string;
  icon: string;
  url: string;
}

const Sidebar = () => {
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
    <div className={classNames('sidebarContainer', { transition })}>
      <div className="sidebarTop" onClick={() => setActivePage('/home')} role="button" tabIndex={0}>
        <p className="logo">r</p>
        <p className="logo">h</p>
      </div>
      <div className="navigation">
        {pages.map(({ display, url }: NavItem) => (
          <div
            key={display}
            className={classNames('navLink', { active: url === activePage })}
            onClick={() => setActivePage(url)}
          >
            <i className={display || 'home'} />
          </div>
        ))}
      </div>
      <div className="sidebarFooter">
        {links.map(({ display, icon, url }: NavItem) => (
          <a key={display} className="linkIcon" href={url} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="display" />
          </a>
        ))}
      </div>
      <span className="attributionLink">
        Icons by &nbsp;{' '}
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
          https://icons8.com
        </a>
      </span>
    </div>
  );
};

export default Sidebar;
