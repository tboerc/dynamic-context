import type { Component } from "../types";
import React, { createContext, useEffect, useState } from "react";

export const Foo3Context = createContext<boolean | null>(null);

const Foo3ContextProvider: Component = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <h1>Foo3 Loading</h1>;
  }

  return <Foo3Context.Provider value={true}>{children}</Foo3Context.Provider>;
};

export default Foo3ContextProvider;
