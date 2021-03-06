import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Gotham;
  font-size: 11px;
  padding: 10px 40px;
`;

export const Links = styled.div`
  width: 16.5%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => (theme.darkMode ? theme.text : "#23252a")};
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
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

export const IconContainer = styled.div`
  width: 100%;
`;

export const Copyright = styled.div`
  color: #c6c8cc;
  font-size: 14px;
  @media only screen and (max-width: 1600px) {
    font-size: 11px;
  }
  text-align: center;
`;

export const Icons = styled.ul`
  @media only screen and (max-width: 900px) {
    display: flex;
  }
  @media only screen and (min-width: 901px) {
    display: none;
  }
  list-style: none;
  padding: 0;
  justify-content: center;

  & > li {
    display: inline;
    color: ${({ theme }) => theme.text};
    margin-right: 15px;
  }
  & a {
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 13px;
    font-size: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s ease;
    @media only screen and (max-width: 400px){
      width: 45px;
      height: 45px;
    }
  }
`;

export const Wrapper = styled.div`
  background: transparent;
  position: absolute;
  bottom: 50px;
  width: 100%;
`;
