import styled from "@emotion/styled";
import AboutLight from "../assets/about-light.svg";
import AboutDark from "../assets/about-dark.svg";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  /* background: blue; */
  background: ${({ theme }) =>
    `url(${theme.darkMode ? AboutDark.src : AboutLight.src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
