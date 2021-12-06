import { createContext, useState } from 'react';

export const InputContext = createContext({ location: 'Helsinki', guests: 10 });

export const InputContextProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [cantAdults, setCantAdults] = useState(0);
  const [cantChildren, setCantChildren] = useState(0);
  const values = {
    location,
    cantAdults,
    cantChildren,
    setLocation: (value) => setLocation(Object.keys(value).toString()),
    setCantChildren: (value) => setCantChildren(value),
    setCantAdults: (value) => setCantAdults(value),
  };

  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};
