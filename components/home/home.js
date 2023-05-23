import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MainPage,
  InfoSection,
  ImageSection,
  InfoTextContainer,
} from "./styles/home";
import Typical from "./typing";
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
                "Messing around with code.",
                1000,
                "Making & Breaking things.",
                1000,
                "Blogging.",
                1000,
                "Gaming.",
                1000,
                "Exploring the tech.",
                1000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
          <Link href="/projects">
            <a>See my work</a>
          </Link>
        </InfoTextContainer>
      </InfoSection>
      <ImageSection>
        <Image src={Main} alt="MAIN" priority={true} />
      </ImageSection>
    </MainPage>
  );
};

export default memo(Home);
