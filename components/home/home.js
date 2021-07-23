import {
  MainPage,
  InfoSection,
  ImageSection,
  InfoTextContainer,
} from "./styles/home";
import Typical from "./typing";
import Image from "next/image";
import Main from "./assets/hero-graphic.webp";

const Home = () => {
  return (
    <MainPage>
      <InfoSection>
        <InfoTextContainer>
          <p>Hi!</p>
          <h1>I am Abhishek Jain</h1>
          <p>
            A Full Stack Developer, who loves <br />
            <Typical
              steps={[
                "Programming .",
                1000,
                "Making the web more beautiful.",
                1000,
                "Blogging.",
                1000,
                "Gaming.",
                1000,
                "Exploring the tech.",
                1000
              ]}
              loop={2}
              wrapper="span"
            />
          </p>
          <a href="#work">See my work</a>
        </InfoTextContainer>
      </InfoSection>
      <ImageSection>
        <Image src={Main} alt="MAIN" />
      </ImageSection>
    </MainPage>
  );
};

export default Home;
