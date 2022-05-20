import type { Page } from "../types";

import Link from "next/link";
import React, { useContext } from "react";

import { Foo2Context } from "../contexts/Foo2";
import { Foo1Context } from "../contexts/Foo1";
import Foo3ContextProvider, { Foo3Context } from "../contexts/Foo3";

const Test: Page = () => {
  const Foo1 = useContext(Foo1Context);
  const Foo2 = useContext(Foo2Context);
  const Foo3 = useContext(Foo3Context);

  return (
    <>
      <h1>Only loads Foo3 context. Keeps other contexts if already loaded.</h1>
      <p>Foo1 loaded? {String(Foo1)}</p>
      <p>Foo2 loaded? {String(Foo2)}</p>
      <p>Foo3 loaded? {String(Foo3)}</p>

      <Link href="/">Go back</Link>
    </>
  );
};

Test.config = {
  providers: [Foo3ContextProvider],
};

export default Test;
