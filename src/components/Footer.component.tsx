import React from 'react';
import { links } from '../utils/constants';
import { NavItem } from '../utils/types';

const Footer = () => {
  return (
    <div id="Contact" className="footer">
      <div className="footerContent">
        <h3 className="footerCaption">Interested in learning more or working together?</h3>
        <div className="externalLinks">
          {links.map(({ display, icon, url }: NavItem) => (
            <a key={display} className="linkIcon" href={url} target="_blank" rel="noopener noreferrer">
              <i className={icon} />
            </a>
          ))}
        </div>
        <a
          className="resumeBtn"
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Footer;
