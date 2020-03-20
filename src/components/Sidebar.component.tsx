import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

export interface Props {
  pages: NavItem[];
  links: NavItem[];
}

export interface NavItem {
  display: string;
  icon: string;
  url?: string;
}

const Sidebar = ({ pages, links }: Props) => {
  const [{ pathname }, history] = [useLocation(), useHistory()];

  const handleOnClick = () => {
    history.push('/home');
  };

  return (
    <div className="sidebarContainer">
      <div className="sidebarTop" onClick={handleOnClick} role="button" tabIndex={0}>
        <p className="logo">r</p>
        <p className="logo">h</p>
      </div>
      <div className="navigation">
        {pages.map(({ display }: NavItem) => (
          <NavLink key={display} className={`navLink ${pathname === `/${display}` && 'activeLink'}`} to={`${display}`}>
            <i className={display || 'home'} />
          </NavLink>
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
