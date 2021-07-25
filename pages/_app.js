import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      primary: "#f1f2f3",
      secondary: "#0e0d0c",
      accentColor: "#ffdd6e"
    },
    dark: {
      primary: "#000",
      secondary: "#f1f2f3",
      accentColor: "#ff4a57"
    },
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      <ThemeProvider
        theme={{
          ...theme[darkMode ? "dark" : "light"],
          toggle,
          darkMode,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
