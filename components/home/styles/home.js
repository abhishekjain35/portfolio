import styled from "@emotion/styled";

export const Container = styled.div``;

export const MainPage = styled.main`
  height: calc(100vh - 95px);
  color: ${({ theme }) => theme.secondary};
  font-family: Roboto-medium;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoSection = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageSection = styled.section`
  width: 40%;
  height: 100%;
`;

export const InfoTextContainer = styled.aside`
  p {
    margin: 0;
    font-size: 40px;
  }
  h1 {
    margin: 0;
    font-size: 50px;
  }
`;
