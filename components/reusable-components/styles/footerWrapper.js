import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => (theme.darkMode ? theme.background : "#fff")};
  /* position: relative;
  bottom: 0; */
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  & > footer > div > div {
    color: ${({ theme }) => theme.text};
  }
  border-top: 1px solid
    ${({ theme }) =>
      theme.darkMode ? "rgba(255,255,255,0.5)" : "rgba(14,13,12,0.5)"};
  & > footer > div {
    width: initial;
  }
  & > footer > div > a {
    margin-right: 30px;
    font-size: 14px;
  }
  & > footer > div > div {
    font-size: 14px;
  }
  & > footer > div > ul {
    margin-bottom: 0;
  }
  & > footer {
    @media only screen and (max-width: 900px) {
      justify-content: center;
    }
  }
  @media only screen and (max-width: 900px) {
    padding-bottom: 20px;
  }
`;
