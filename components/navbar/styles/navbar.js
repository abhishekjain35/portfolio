import styled from "@emotion/styled";

export const Container = styled.nav`
  padding: 20px 20vw;
  width: 100vw;
  height: 95px;
  position: fixed;
  z-index: 10;
  background: ${({ scroll, theme }) =>
    scroll ? theme.background : "transparent"};
  z-index: 11;
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
  font-size: 22px;
  color: ${({ theme }) => theme.text};

  span {
    transition: 0.3s ease;
  }
  span:hover {
    color: #ff4a57;
    /* font-size: 22px; */
  }
`;
