import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Container = styled.nav`
  padding: 20px 20vw;
  width: 100vw;
  height: 95px;
  position: fixed;
  z-index: 10;
  background: ${({ scroll, theme }) =>
    scroll ? theme.alternateBackground : "transparent"};
  z-index: 11;
  @media only screen and (max-width: 1000px) {
    padding: 20px 5vw;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 10vw;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavRightContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  span {
    transition: 0.3s ease;
  }
  span:hover {
    color: ${({ theme }) => theme.accentColor};
  }
  @media only screen and (max-width: 1200px) {
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  @media only screen and (max-width: 600px) {
    display: initial;
  }
  @media only screen and (min-width: 601px) {
    display: none;
  }
  z-index: 100;

  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
  box-sizing: border-box;
  text-align: center;

  .hamburger .line {
    width: 30px;
    height: 5px;
    background-color: ${({ theme, open }) =>
      open ? "#fff" : theme.accentColor};
    display: block;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  & #hamburger-6.is-active {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.6s;
    transform: rotate(45deg);
  }

  & #hamburger-6.is-active .line:nth-of-type(2) {
    width: 0px;
  }

  & #hamburger-6.is-active .line:nth-of-type(1),
  & #hamburger-6.is-active .line:nth-of-type(3) {
    transition-delay: 0.3s;
  }

  & #hamburger-6.is-active .line:nth-of-type(1) {
    transform: translateY(7px);
  }

  & #hamburger-6.is-active .line:nth-of-type(3) {
    transform: translateY(-13px) rotate(90deg);
  }
`;

const slide = keyframes`
  100% { width: 100vw; }
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 0vw;
  height: 100vh;
  z-index: 10;
  background-color: black;
  animation: ${slide} 0.5s forwards;

  top: 0;
  left: 0;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0px;
    list-style: none;
  }

  & li {
    padding: 50px;
    font-size: 30px;
    height: 50px;
    cursor: pointer;
    color: white !important;
  }

  & li:hover {
    color: ${({ theme }) => theme.accentColor} !important;
  }
`;

export const LogoSvg = styled.svg`
  @media only screen and (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
`;
