import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface Props {
  darkMode: string;
  onChange: Dispatch<SetStateAction<string>>;
  className: string;
}

const Toggle = ({ darkMode, onChange, className }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value === 'light' ? 'dark' : 'light');
  };
  return (
    <label htmlFor="toggle" className={`switch ${className}`}>
      <input type="checkbox" id="toggle" onChange={handleChange} value={darkMode} />
      <span className="slider round">
        <img className={`toggleIcon ${darkMode}`} src={`../assets/${darkMode}.png`} alt="moon" />
      </span>
    </label>
  );
};

export default Toggle;
