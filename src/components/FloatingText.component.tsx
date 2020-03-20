import React, { memo } from 'react';

interface Props {
  idx: number;
  text: string;
}

const classnames = ['orange', 'apple', 'strawberry', 'grapefruit', 'mango'];

const FloatingText = ({ idx, text }: Props) => {
  const className = classnames[Math.floor(idx / 2)] || classnames[Math.floor(idx / 3)];
  // const sym = idx % 2 ? -1000 : -0;
  const position = {
    left: Math.abs(Math.random() * window.innerWidth - 100),
    bottom: Math.abs(Math.random() * window.innerHeight),
  };
  console.log(position);
  return (
    <span key={text} style={{ position: 'absolute', ...position }} className={`text ${className}`}>
      {text}
    </span>
  );
};

export default memo(FloatingText);
