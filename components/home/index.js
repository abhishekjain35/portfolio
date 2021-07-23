import NavbarComponent from "../navbar";
import { Container } from "./styles/home";
import particles from "./assets/particles.svg";
import particlesDark from "./assets/particles-dark.svg";
import { useTheme } from "@emotion/react";
import Home from "./home";

const HomeComponent = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        backgroundImage: `url(${
          theme.darkMode ? particlesDark.src : particles.src
        })`,
      }}
    >
      <NavbarComponent />
      <Home />
    </Container>
  );
};

export default HomeComponent;
