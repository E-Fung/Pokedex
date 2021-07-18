import React, { useState, createContext, useCallback, useContext } from "react";

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext([{}, () => {}]);

export default function AppContextProvider({ children }) {
  const [pokeIndex, setPokeIndex] = useState(null);

  const handlePokeIndex = useCallback((index) => {
    setPokeIndex(index);
  });
  return (
    <AppContext.Provider value={{ pokeIndex, handlePokeIndex }}>
      {children}
    </AppContext.Provider>
  );
}
