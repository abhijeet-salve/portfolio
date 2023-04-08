import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className=" mx-6 sm:mx-24 lg:mx-32 xl:mx-80 whitespace-pre font-Poppins">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
