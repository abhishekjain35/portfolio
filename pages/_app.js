import { useEffect, useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      background: "#f1f2f3",
      alternateBackground: "#f8f8ff",
      text: "#0e0d0c",
      accentColor: "#6335c7",
      cardColor: "#fff",
    },
    dark: {
      background: "#202335",
      alternateBackground: "#242739",
      text: "#fff",
      accentColor: "#ff4a57",
      cardColor: "#242739",
    },
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
        <meta
          name="description"
          content="Github - @abhishekjain35 | abhishekdev - Abhishek Jain's Portfolio website | Full Stack web developer | ReactJs, NodeJs, ExpressJs, MongoDB."
        />
        <meta
          property="og:title"
          content="Abhishek Jain | Full stack web developer"
        />
        <meta
          property="og:description"
          content="Abhishek Jain | Full stack web developer"
        />
        <meta property="og:url" content="https://abhishekjain.tech/" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="abhishekdev - Abhishek Jain's Portfolio website. Abhishek Jain Full Stack web developer abhishekjai35@gmail.com - ReactJs, NodeJs, ExpressJs, MongoDB etc."
        />
        <meta
          name="twitter:title"
          content="Abhishek Jain | Full stack web developer"
        />
        <meta
          name="twitter:description"
          content="Abhishek Jain | Full stack web developer"
        />
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
