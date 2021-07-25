import {
  Container,
  AboutSection,
  ImageSection,
  Blob,
  Header,
  AboutInfo,
  Links,
  LinkWrapper,
} from "./styles/about";
import Image from "next/image";
import AboutHero from "./assets/about-hero.svg";

const About = () => {
  return (
    <Container>
      <ImageSection>
        <Image src={AboutHero} alt="About Image" />
        <Blob />
      </ImageSection>
      <AboutSection>
        <Header>About Me!</Header>
        <AboutInfo>
          I&apos;m a Full Stack developer based in India. I have a serious
          passion for creating fully functional web applications with an
          excellent user interface. I always like to explore Javascript and
          React to learn new advancements for these technologies. Apart from
          that, I also write articles once in a while to explain the tech that I
          learn.
        </AboutInfo>
        <Links>
          <LinkWrapper>
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width="16px"
              height="16px"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
            <span>Gwalior, MP, India</span>
          </LinkWrapper>
          <LinkWrapper>
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="envelope"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16px"
              height="16px"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
            <a href="mailto:abhishekjai35@gmail.com">abhishekjai35@gmail.com</a>
          </LinkWrapper>
        </Links>
      </AboutSection>
    </Container>
  );
};

export default About;
