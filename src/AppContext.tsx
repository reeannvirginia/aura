import React, { useState } from 'react';

interface Props {
  children: object;
}

interface ContextProps {
  transition: boolean;
  updateTransition: (val: boolean) => void;
}

export const AppContext = React.createContext({} as ContextProps);

export const ContextProvider = ({ children }: Props) => {
  const [transition, setTransition] = useState(false);

  const updateTransition = (val: boolean) => setTransition(val);

  const value = { transition, updateTransition };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
