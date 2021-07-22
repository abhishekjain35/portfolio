import NavbarComponent from "../navbar";
import { Container, MainPage } from "./styles/home";
import particles from "./assets/particles.svg";
import particlesDark from "./assets/particles-dark.svg";
import { useTheme } from "@emotion/react";

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
      <MainPage>
        <NavbarComponent />
        <h1>HII</h1>
      </MainPage>
    </Container>
  );
};

export default HomeComponent;
