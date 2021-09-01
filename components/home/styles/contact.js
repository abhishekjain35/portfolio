import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 95px);
  background: ${({ theme }) => (theme.darkMode ? theme.background : "#fff")};
  position: relative;
  overflow-x: hidden;
  @media only screen and (max-width: 750px) {
    min-height: 450px;
  }
  @media only screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const Lines = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & > .lines_i {
    height: 100%;
    width: calc(12.5% - 10px);
  }
  & > .lines_i__1,
  .lines_i__10 {
    width: 40px !important;
  }
  & > .lines_i:before {
    background: ${({ theme }) => (theme.darkMode ? "#2c2f44" : "#f0f2f7")};
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    transition: background 0.2s 0.2s;
  }
  & > .lines_i:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #fff;
    transition: width 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const Wrapper = styled.div`
  width: calc(75% - 60px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 350px) {
    width: calc(100% - 60px);
  }
`;

export const Title = styled.div`
  margin-top: -80px;
  color: ${({ theme }) => (theme.darkMode ? theme.text : "#1d2026")};
`;

export const P = styled.p`
  font-family: Gotham-bold;
  font-size: 30px;
  margin: 5px 0;
  @media only screen and (max-height: 600px) {
    font-size: 25px;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 62.5%;
  margin-bottom: 160px;
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const RightContainer = styled.div`
  margin-bottom: 70px;
  @media only screen and (max-width: 700px) {
    margin-bottom: 160px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const Label = styled.div`
  font-size: 18px;
  color: #8e9199;
  margin-bottom: 50px;
  margin-top: 130px;
  @media only screen and (max-width: 1600px) {
    font-size: 13px;
    margin-top: 80px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 700px) {
    margin-top: 40px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => (theme.darkMode ? theme.text : "#23252a")};
  display: inline-block;
  font-family: "Gotham-bold";
  font-size: 24px;
  position: relative;
  transition: color 0.5s;
  @media only screen and (max-width: 1600px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div``;

export const Button = styled.a`
  display: block;
  margin: auto;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-family: Gotham-bold;
  font-size: 18px;
  width: 33.3%;
  text-align: center;
  background: #e70a35;
  color: #fff;
  height: 75px;
  line-height: 75px;
  box-shadow: 0 20px 50px -20px #ff0333;
  transition: all 0.2s;
  @media only screen and (max-width: 1600px) {
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    box-shadow: 0 10px 35px -15px #ff0333;
  }

  @media only screen and (max-width: 1000px) {
    width: 66.6%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 2.5vw;
  }

  &:hover {
    box-shadow: 0 5px 25px -15px #ff0333;
    transform: translateY(5px);
  }
`;

export const SectionTitle = styled.div`
  color: ${({ theme }) => (theme.darkMode ? "#2b3140" : "#f0f2f7")};
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 45%;
  white-space: nowrap;
  font-family: Gotham-bold;
  font-size: 300px;
  @media only screen and (max-width: 1600px) {
    font-size: 200px;
  }
  @media only screen and (max-width: 750px) {
    font-size: 120px;
  }
`;

export const SectionText = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  writing-mode: vertical-lr;
  color: #c6c8cc;
  font-size: 18px;
  width: 17px;
  text-transform: uppercase;
  font-family: Gotham-bold;
  letter-spacing: 0.4em;
  @media only screen and (max-width: 1600px) {
    font-size: 12px;
    width: 11px;
  }
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const Footer = styled.div`
  background: transparent;
  position: absolute;
  bottom: 50px;
  width: 100%;
  @media only screen and (max-width: 450px) {
    bottom: 0;
    padding: 20px;
  }
`;
