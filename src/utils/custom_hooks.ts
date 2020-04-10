import { useEffect, useState } from 'react';

export const useStickyTheme = () => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem('theme');
    return stickyValue ? JSON.parse(stickyValue) : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export const useClickAway = (ref: any, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
