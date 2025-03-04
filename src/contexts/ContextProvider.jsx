'use client';
import React, { createContext, useContext, useState } from 'react';

export const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [utilities, setUtilities] = useState({
    carColor: '#fff',
    editMode: false,
    environment: 'kloppenheim_06_puresky_4k.exr',
    Model: 'audiCoupe',
    Ground: 'blured',
    texture: false,
    isPattern: false,
    pattern: '',
  });

  const [patternPicker, setpatternPicker] = useState(false);
  const [modelSelector, setModelSelector] = useState(false);

  return (
    <StateContext.Provider
      value={{
        setUtilities,
        utilities,
        patternPicker,
        setpatternPicker,
        modelSelector,
        setModelSelector,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
