import type { AppProps as NextAppProps } from "next/app";
import type { Page } from "../types";

import useMultipleProvider from "../hooks/useMultipleProvider";

import "../styles/globals.css";

type AppProps = NextAppProps & {
  Component: Page;
};

function App({ Component, pageProps }: AppProps) {
  const Page = useMultipleProvider(Component, pageProps);

  return Page;
}

export default App;
