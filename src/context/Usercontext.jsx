import React, { createContext, useState } from 'react';

export const datacontext = createContext();

const Usercontext = ({ children }) => {
  const [startres, setStartres] = useState(false); // ✅ Valid inside a functional component

  const value = {
    startres,
    setStartres,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
};

export default Usercontext;
