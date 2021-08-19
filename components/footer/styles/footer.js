import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  /* height: 95px; */
  display: flex;
  justify-content: space-between;
  font-family: Gotham;
  font-size: 11px;
  padding: 10px 40px;
`;

export const Links = styled.div`
  width: 12.5%;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: ${({ theme }) => (theme.darkMode ? theme.text : "#23252a")};
  font-size: 14px;
  text-decoration: none;
  display: block;
  position: relative;
  @media only screen and (max-width: 1600px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1201px) {
    &:before {
      background: ${({ theme }) => (theme.darkMode ? theme.text : "#23252a")};
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 100%;
      content: "";
      transform-origin: right top;
      transform: scaleX(0);
      transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
  &:hover {
    &:before {
      transform-origin: left top;
      transform: scaleX(1);
    }
    color: ${({ theme }) => theme.accentColor};
  }
`;

export const Copyright = styled.div`
  color: #c6c8cc;
  font-size: 14px;
  @media only screen and (max-width: 1600px) {
    font-size: 11px;
  }
`;
