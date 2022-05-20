import type { Page } from "../types";

import Link from "next/link";
import React, { useContext } from "react";

import Foo2ContextProvider, { Foo2Context } from "../contexts/Foo2";
import Foo1ContextProvider, { Foo1Context } from "../contexts/Foo1";
import { Foo3Context } from "../contexts/Foo3";

const Index: Page = () => {
  const Foo1 = useContext(Foo1Context);
  const Foo2 = useContext(Foo2Context);
  const Foo3 = useContext(Foo3Context);

  return (
    <>
      <h1>
        Only loads Foo1 and Foo2 context. Keeps other contexts if already
        loaded.
      </h1>
      <p>Foo1 loaded? {String(Foo1)}</p>
      <p>Foo2 loaded? {String(Foo2)}</p>
      <p>Foo3 loaded? {String(Foo3)}</p>

      <Link href="/test">Go to page that loads foo3 context</Link>
    </>
  );
};

Index.config = {
  providers: [Foo1ContextProvider, Foo2ContextProvider],
};

export default Index;
