import styled from "@emotion/styled";

export const Container = styled.div`
  width: 35%;
  margin: 15px;
  box-shadow: rgb(0 0 0 / 11%) 0px 2px 13px 0px;
  overflow-wrap: break-word;
  border-radius: 10px;
  transition: transform 0.5s ease 0s;
  background: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  @media only screen and (max-width: 1600px) {
    width: 45%;
  }
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: 15px 0;
  }
`;
