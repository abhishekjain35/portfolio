import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  const theme = {
    light: {
      primary: "#f1f2f3",
      secondary: "#000",
    },
    dark: {
      primary: "#000",
      secondary: "#f1f2f3",
    },
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider
      theme={{
        ...theme[darkMode ? "dark" : "light"],
        toggle,
        darkMode,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
