import styled from "@emotion/styled";

export const Container = styled.div`
  background: ${({theme}) => theme.background};
  background-size: cover;
`;

export const MainPage = styled.main`
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-family: Poppins;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 95px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    height: initial;
  }
`;

export const InfoSection = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    height: initial;
    width: 100%;
    justify-content: center;
    margin-bottom: 80px;
  }
`;

export const ImageSection = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    height: initial;
    margin-bottom: 10vh;
    margin-top: 100px;
    width: 60%;
  }
  @media only screen and (max-width: 750px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 400px) {
    width: 95%;
  }
`;

export const InfoTextContainer = styled.aside`
  padding-top: 20px;
  margin: auto;
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
  p {
    margin: 0;
    font-size: 1.8vw;
    font-style: italic;
    opacity: 0.9;
    @media only screen and (max-width: 1000px) {
      text-align: center;
    }
  }
  h1 {
    margin: 0;
    font-size: 3.5vw;
  }
  a {
    border: 2px solid;
    color: #fff;
    font-weight: 500;
    display: inline-block;
    padding: 13px 40px;
    border-radius: 50px;
    font-size: 15px;
    border-color: #ff4a57;
    color: ${({ theme }) => theme.text};
    box-shadow: none;
    text-decoration: none;
    transition: 0.3s ease;
    margin-top: 30px;
  }
  a:hover {
    background: #ff4a57;
    color: ${({ theme }) => theme.background};
  }
  @media only screen and (max-width: 1000px) {
    p {
      font-size: 20px;
    }
    h1 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 500px) {
    p {
      font-size: 4vw;
    }
    h1 {
      font-size: 9vw;
    }
    a {
      padding: 8px 25px;
      font-size: 3vw;
    }
  }
`;
