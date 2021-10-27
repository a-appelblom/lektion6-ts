import { NextPage } from "next";
import { AppProps } from "next/app";
import ThemeProvider from "../components/context/ThemeProvider";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
