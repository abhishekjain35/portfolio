import { Container, AboutSection, ImageSection, Blob, Header } from "./styles/about";
import Image from "next/image";
import AboutHero from "./assets/about-hero.svg";

const About = () => {
  return (
    <Container>
      <AboutSection>
        <Header>About Me!</Header>
      </AboutSection>
      <ImageSection>
        <Image src={AboutHero} alt="About Image" />
        <Blob />
      </ImageSection>
    </Container>
  );
};

export default About;
