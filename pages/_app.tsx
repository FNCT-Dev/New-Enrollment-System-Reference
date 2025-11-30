import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function App({ Component, pageProps }: AppProps) {
  const plasmicData = (pageProps as any).plasmicData;

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
