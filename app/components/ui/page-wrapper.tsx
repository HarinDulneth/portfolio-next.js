"use client";

import React, { createContext, useContext, useState } from "react";
import Preloader from "./preloader";

// Context to let child components know when preloader is done
const PreloaderContext = createContext(false);

export const usePreloaderDone = () => useContext(PreloaderContext);

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [done, setDone] = useState(false);

  return (
    <PreloaderContext.Provider value={done}>
      {!done && <Preloader onComplete={() => setDone(true)} />}
      {children}
    </PreloaderContext.Provider>
  );
};

export default PageWrapper;
