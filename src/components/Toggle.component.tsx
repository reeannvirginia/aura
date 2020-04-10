import React, { ChangeEvent } from 'react';
import { dark, light } from '../assets';
import { ToggleProps } from '../utils/types';

const Toggle = ({ darkMode, onChange, className }: ToggleProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value === 'light' ? 'dark' : 'light');
  };

  const src = darkMode === 'light' ? dark : light;
  return (
    <label htmlFor="toggle" className={`switch ${className}`}>
      <input type="checkbox" id="toggle" onChange={handleChange} value={darkMode} />
      <span className="slider round">
        <img className={`toggleIcon ${darkMode}`} src={src} alt={darkMode} />
      </span>
    </label>
  );
};

export default Toggle;
