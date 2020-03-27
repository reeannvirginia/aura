import React from 'react';
import { links } from '../utils/constants';

export interface NavItem {
  display: string;
  icon: string;
  url: string;
}

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="sidebarTop">
        <h1 className="logo">r</h1>
        <h1 className="logo">h</h1>
      </div>
      <div className="externalLinks">
        {links.map(({ display, icon, url }: NavItem) => (
          <a key={display} className="linkIcon" href={url} target="_blank" rel="noopener noreferrer">
            <i className={icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
