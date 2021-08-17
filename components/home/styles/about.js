import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.alternateBackground};
  overflow: hidden;
`;

export const AboutSection = styled.section`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  z-index: 10;
`;

export const ImageSection = styled.section`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Blob = styled.div`
  height: 100%;
  width: 150%;
  background: ${({ theme }) => (theme.darkMode ? "#303f9f" : "#ffdd6e")};
  /* background: #ffdd6e; */
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  opacity: ${({ theme }) => (theme.darkMode ? 0.2 : 0.1)};
  position: absolute;
  @media only screen and (max-width: 1000px){
    width: 200%;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3.5vw;
  border-bottom: 5px solid
    ${({ theme }) => (theme.darkMode ? "#cacaca" : "#ffdd6e")};
  font-family: Roboto-medium;
  font-style: italic;
  color: ${({ theme }) => theme.accentColor};
`;

export const AboutInfo = styled.aside`
  font-size: 20px;
  color: ${({ theme }) => (theme.darkMode ? "#f1f2f3" : "#272217")};
  width: 80%;
  font-family: Roboto-medium;
  line-height: 160%;
  z-index: 10;
`;

export const Links = styled.ul`
  padding: 0;
  padding-top: 20px;
  width: 100%;
  font-family: Poppins;
  color: ${({ theme }) => theme.text};
  list-style: none;
`;

export const LinkWrapper = styled.li`
  margin: 15px 0;
  & > svg {
    margin-right: 20px;
    fill: ${({ theme }) => theme.accentColor};
  }
`;
