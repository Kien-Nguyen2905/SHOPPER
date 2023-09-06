import React, { createContext } from "react";
const TabContext = createContext();
const Tab = ({ children }) => {
  const value = {};
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
