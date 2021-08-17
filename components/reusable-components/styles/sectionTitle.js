import styled from "@emotion/styled";

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
  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 35px;
    }
  }
`;
