"use client"
import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({score:'undefined'});

  return (
    <DataContext.Provider
      value={{
        data,
        handleData: (val) => setData({...data, score:val}),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData= () => useContext(DataContext)