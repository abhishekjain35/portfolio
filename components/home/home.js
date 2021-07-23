import {
  MainPage,
  InfoSection,
  ImageSection,
  InfoTextContainer,
} from "./styles/home";

const Home = () => {
  return (
    <MainPage>
      <InfoSection>
        <InfoTextContainer>
          <p>Hi!</p>
          <h1>I am Abhishek Jain</h1>
          <p>A Full Stack Developer</p>
        </InfoTextContainer>
      </InfoSection>
      <ImageSection></ImageSection>
    </MainPage>
  );
};

export default Home;
