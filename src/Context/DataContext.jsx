import React, { useState } from "react";
import { useContext, createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [oneData, setOneData] = useState({});

  return (
    <DataContext.Provider
      value={{ data, setData, search, setSearch, oneData, setOneData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
