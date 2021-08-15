import styled from "@emotion/styled";

export const Container = styled.div`
  width: 35%;
  margin: 15px;
  padding: 0px 0px 15px;
  box-shadow: rgb(0 0 0 / 11%) 0px 2px 13px 0px;
  overflow-wrap: break-word;
  border-radius: 10px;
  transition: transform 0.5s ease 0s;
  background: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  overflow: hidden;
  & img {
    min-height: 250px;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
  }
  @media only screen and (max-width: 1600px) {
    width: 45%;
  }
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-height: 250px;
  @media only screen and (max-width: 500px) {
    min-height: 50vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media only screen and (max-width: 500px) {
    padding: 25px;
  }
`;

export const Info = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

export const SmallInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 15px 0 0;
  & svg {
    margin-right: 5px;
    fill: ${({ theme }) => theme.text};
  }
  & > a {
    color: ${({ theme }) => theme.accentColor};
    margin-left: 5px;
  }
`;

export const Svg = styled.svg`
  fill: none !important;
  stroke: ${({ theme }) => theme.text};
  .st0 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st1 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .st2 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 5.2066, 0;
  }
`;

export const Title = styled.h5`
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;
  word-wrap: break-word;
  color: ${({ theme }) => (theme.darkMode ? "#fff" : theme.text)};
  font-family: Poppins;
  font-weight: 700;
  line-height: 1.2;
  transition: 0.3s ease;
  margin: 0 0 10px 0;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

export const ReadMore = styled.a`
  .cls-1 {
    fill: blue;
  }
  svg {
    background-color: ${({ theme }) => theme.accentColor};
    border-radius: 50%;
    color: ${({ theme }) => theme.background};
    margin-left: 15px;
    transition: 0.3s;
  }
  display: flex;
  align-items: center;
  transition: 0.3s ease;
  font-weight: 600;
  box-shadow: none;
  text-decoration: none;
  font-size: 16px;
  color: ${({ theme }) => theme.accentColor};
  display: inline;
  &:hover {
    color: ${({ theme }) => (theme.darkMode ? theme.text : "#202335")};
    svg {
      background-color: ${({ theme }) =>
        theme.darkMode ? theme.text : "#202335"};
      margin-left: 10px;
    }
  }
`;

export const Description = styled.p`
  word-wrap: break-word;
  opacity: 0.8;
  color: ${({ theme }) => theme.text};
`;
