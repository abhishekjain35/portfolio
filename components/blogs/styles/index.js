import styled from "@emotion/styled";
import Constellation from "../assets/constellation.svg";
import ConstellationLight from "../assets/constellation-light.svg";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.darkMode
      ? `url(${Constellation.src})`
      : `url(${ConstellationLight.src})`};
  padding: 50px 0;
  padding-top: ${({ page }) => (page ? "145px" : "50px")};
`;

export const Cards = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0 20px 0;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3.5vw;
    margin: 0.5em;
  }
  div {
    background-color: ${({ theme }) => theme.accentColor};
    height: 5px;
    width: 100px;
  }
`;

export const Footer = styled.footer`
  h1 {
    /* display: inline; */
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    font-family: Roboto-medium;
    transition: 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;
