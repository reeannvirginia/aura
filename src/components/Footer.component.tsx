import React from 'react';
import { links } from '../utils/constants';
import { NavItem } from '../utils/types';

const Footer = () => {
  return (
    <div id="CONTACT" className="footer">
      <div className="footerWrapper">
        <div className="footerMesg">
          <h2>Let's chat!</h2>
        </div>
        <p>
          Drop me a line at <a href="mailto:reeannvirginia@gmail.com">reeannvirginia@gmail.com.</a>
        </p>
        <div className="externalLinks">
          {links.map(({ display, icon, url }: NavItem) => (
            <a key={display} className="linkIcon" href={url} target="_blank" rel="noopener noreferrer">
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
