import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
`;

export const MainPage = styled.main`
  height: 100vh;
  color: ${({ theme }) => theme.secondary};
  font-family: Poppins;
  /* font-family: Roboto-medium; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 95px;
`;

export const InfoSection = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageSection = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoTextContainer = styled.aside`
  padding-top: 20px;
  p {
    margin: 0;
    font-size: 1.8vw;
    font-style: italic;
    opacity: 0.9;
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
    color: ${({ theme }) => theme.secondary};
    box-shadow: none;
    text-decoration: none;
    transition: 0.3s ease;
    margin-top: 30px;
  }
  a:hover {
    background: #ff4a57;
    color: ${({ theme }) => theme.primary};
  }
`;
