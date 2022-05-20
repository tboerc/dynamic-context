import type { Component } from "../types";
import React, { createContext, useEffect, useState } from "react";

export const Foo1Context = createContext<boolean | null>(null);

const Foo1ContextProvider: Component = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <h1>Foo1 Loading</h1>;
  }

  return <Foo1Context.Provider value={true}>{children}</Foo1Context.Provider>;
};

export default Foo1ContextProvider;
