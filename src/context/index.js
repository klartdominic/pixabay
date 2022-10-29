import React, {useState} from 'react';
import {createContext} from 'react';

export const Context = createContext();

//------------------------------------------------------------------
// Use this for simple global states
// only if your case doesn't need persisted storage
//------------------------------------------------------------------
export const ContextProvider = ({children}) => {
  const [pixabayResponse, setPixabayResponse] = useState({});
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(1);
  return (
    <Context.Provider
      value={{
        pixabayResponse,
        setPixabayResponse,
        page,
        setPage,
        searched,
        setSearched,
      }}>
      {children}
    </Context.Provider>
  );
};
