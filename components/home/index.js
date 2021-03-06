import NavbarComponent from "../navbar";
import { Container } from "./styles/home";
import particles from "./assets/particles.svg";
import particlesDark from "./assets/particles-dark.svg";
import { useTheme } from "@emotion/react";
import Home from "./home";
import About from "./about";
import Blogs from "../blogs";
import Projects from "./projects";
import Contacts from "./contact";

const HomeComponent = ({ blogs }) => {
  const theme = useTheme();
  return (
    <div>
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
      <About />
      <Blogs blogs={blogs} />
      <Projects />
      <Contacts />
    </div>
  );
};

export default HomeComponent;
