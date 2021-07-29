import { useEffect, useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      background: "#f1f2f3",
      text: "#0e0d0c",
      accentColor: "#6335c7",
      cardColor: "#fff",
    },
    dark: {
      background: "#202335",
      text: "#fff",
      accentColor: "#ff4a57",
      cardColor: "#242739",
    },
    // dark: {
    //   primary: "#000",
    //   secondary: "#f1f2f3",
    //   accentColor: "#ff4a57",
    // },
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === null) {
      localStorage.setItem("darkMode", false);
    }
    if (isDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhishek Jain</title>
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
