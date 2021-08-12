import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
  font-family: Gotham;
  font-size: 11px;
  /* align-items: center; */
  padding: 10px 40px;
`;

export const Links = styled.div`
  width: 12.5%;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: #23252a;
  font-size: 14px;
  @media only screen and (min-width: 1200px) and (max-width: 1600px) {
    /* font-size: 11px; */
  }
`;

export const Copyright = styled.div`
  color: #c6c8cc;
  font-size: 14px;
  @media only screen and (min-width: 1200px) and (max-width: 1600px) {
    /* font-size: 11px; */
  }
`;
