import styled from "@emotion/styled";

export const Container = styled.nav`
  padding: 20px 20vw;
  width: 100vw;
  height: 80px;
  background: transparent;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavRightContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.secondary};
`;
