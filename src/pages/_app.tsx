import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Header from "../components/common/HeaderComponent";
import GoBack from "../components/common/GoBackComponent";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className=" mx-6 mb-12 sm:mx-24 lg:mx-32 xl:mx-80 whitespace-pre font-Poppins">
          <div>
            <Header />
          </div>
          <div>
            <GoBack />
          </div>
          <Component {...pageProps} />

          <Analytics />
        </div>
      </ThemeProvider>
    </>
  );
}
