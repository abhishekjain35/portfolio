import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  padding-top: 50px;
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
