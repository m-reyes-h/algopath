import React, { createContext, useState } from "react";

export const LSContext = createContext();
const LSContextProvider = ({ children }) => {
  const [config, setConfig] = useState({
    values: [
      5,
      12,
      21,
      7,
      37,
      10,
      26,
      3,
      33,
      27,
      38,
      3,
      33,
      1,
      19,
      27,
      24,
      20,
      21,
      12,
      18,
      5,
      27,
      36,
      24,
      14,
      15,
      8,
      6,
      20,
      13,
      8,
      6,
      21,
      22,
      10,
      15,
      14,
      18,
      16,
    ],
    arraySize: 39,
    target: 1,
    speed: 1,
    // Algorithm UI
    current: -1,
    founded: false,
  });

  const updateConfig = (newConfig) => {
    setConfig({ ...config, ...newConfig });
  };

  return (
    <LSContext.Provider value={{ config, updateConfig }}>
      {children}
    </LSContext.Provider>
  );
};

export default LSContextProvider;
