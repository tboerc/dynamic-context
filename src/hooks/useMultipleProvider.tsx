import type { AppProps } from "next/app";
import type { Page } from "../types";

import { useEffect, useMemo, useState } from "react";

import { uniqueBy } from "../utils";

const useMultipleProvider = (
  Component: Page,
  pageProps: AppProps["pageProps"]
) => {
  const [providers, setProviders] = useState<any[]>([]);

  const componentProviders = useMemo(
    () => Component.config?.providers || [],
    [Component.config?.providers]
  );

  useEffect(() => {
    if (componentProviders.length) {
      setProviders((prev) =>
        uniqueBy([...prev, ...componentProviders], (f) => f.name)
      );
    }
  }, [componentProviders]);

  return providers.reduceRight(
    (Prev, Curr) => <Curr>{Prev}</Curr>,
    <Component {...pageProps} />
  );
};

export default useMultipleProvider;
