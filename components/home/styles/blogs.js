import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
`;

export const Cards = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0px;
`;
