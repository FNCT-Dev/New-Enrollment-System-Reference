import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const SIDEBAR_WIDTH = 280;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar width={SIDEBAR_WIDTH} />
        <main className="flex-1 p-6 bg-[#F8F8FA]">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
