import React, { useState, createContext } from "react";

export const NewRecordDisplayContext = createContext();

export const NewRecordDisplayFunction = ({ children }) => {
  const [newRecordDisplay, setNewRecordDisplay] = useState(false);

  return (
    <NewRecordDisplayContext.Provider
      value={{ newRecordDisplay, setNewRecordDisplay }}>
      {children}
    </NewRecordDisplayContext.Provider>
  );
};
