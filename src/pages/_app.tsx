import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "../components/HeaderComponent";
import GoBack from "../components/common/GoBackComponent";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className=" mx-6 sm:mx-24 lg:mx-32 xl:mx-80 whitespace-pre font-Poppins">
          <div>
            <Header />
          </div>
          <div>
            <GoBack />
          </div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
