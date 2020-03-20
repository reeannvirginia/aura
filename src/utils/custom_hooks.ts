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
