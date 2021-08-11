import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 95px);
  background: ${({ theme }) => theme.alternateBackground};
  background: #fff;
  position: relative;
`;

export const Lines = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & > .lines_i {
    height: 100%;
    width: calc(12.5% - 10px);
  }
  & > .lines_i__1,
  .lines_i__10 {
    width: 40px !important;
  }
  & > .lines_i:before {
    background: #f0f2f7;
    content: "";
    display: block;
    height: 100%;
    width: 1px;
    transition: background 0.2s 0.2s;
  }
  & > .lines_i:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #fff;
    transition: width 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const Wrapper = styled.div`
  width: calc(75% - 60px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  margin-top: -80px;
  color: ${({ theme }) => (theme.darkMode ? theme.text : "#1d2026")};
`;

export const P = styled.p`
  font-family: Gotham-bold;
  font-size: 30px;
  margin: 5px 0;
`;
