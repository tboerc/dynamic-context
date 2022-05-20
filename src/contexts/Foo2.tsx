import type { Component } from "../types";
import React, { createContext, useEffect, useState } from "react";

export const Foo2Context = createContext<boolean | null>(null);

const Foo2ContextProvider: Component = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <h1>Foo2 Loading</h1>;
  }

  return <Foo2Context.Provider value={true}>{children}</Foo2Context.Provider>;
};

export default Foo2ContextProvider;
