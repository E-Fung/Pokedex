import React, { useState, createContext, useContext } from "react";

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext([{}, () => {}]);

const AppContextProvider = ({ children }) => {
  const [currType, setCurrType] = useState("none");

  return (
    <AppContext.Provider value={{ currType, setCurrType }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
