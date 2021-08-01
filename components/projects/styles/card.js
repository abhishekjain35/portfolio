import styled from "@emotion/styled";

export const Container = styled.div`
  width: 35%;
  margin: 15px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 11%) 0px 2px 13px 0px;
  overflow-wrap: break-word;
  border-radius: 10px;
  transition: transform 0.5s ease 0s;
  background: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  /* overflow: hidden; */
  border: 10px solid ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.text};
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const Title = styled.h1`
  font-size: 30px;
  margin: 10px 0;
`;

export const Date = styled.p`
  opacity: 0.8;
  font-size: 15px;
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-family: Poppins;
`;

export const Links = styled.div`
  display: flex;
  margin: 30px 0 10px 0;
  & > a {
    display: flex;
    align-items: center;
    margin-right: 20px;
    background: ${({ theme }) => theme.background};
    padding: 12px;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Demo = styled.a`
  /* display: flex;
  align-items: center;
  margin-right: 20px;
  background: ${({ theme }) => theme.background};
  padding: 15px;
  svg {
    margin-right: 10px;
  } */
`;
export const Github = styled.a``;
