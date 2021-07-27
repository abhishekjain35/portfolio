import styled from "@emotion/styled";

export const Container = styled.div`
  width: 35%;
  margin: 15px;
  padding: 0px 0px 15px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 11%) 0px 2px 13px 0px;
  overflow-wrap: break-word;
  border-radius: 10px;
  transition: transform 0.5s ease 0s;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  overflow: hidden;
  & img {
    min-height: 250px;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Info = styled.div`
  display: flex;
  /* justify-content: space-between; */
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
`;

export const SmallInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  & svg {
    margin-right: 5px;
    fill: ${({ theme }) => theme.secondary};
  }
  & > a {
    color: ${({ theme }) => theme.accentColor};
    margin-left: 5px;
  }
`;

export const Svg = styled.svg`
  fill: none !important;
  stroke: ${({ theme }) => theme.secondary};
  .st0 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st1 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .st2 {
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 5.2066, 0;
  }
`;

export const Title = styled.h5`
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff;
  word-wrap: break-word;
  color: ${({ theme }) => theme.secondary};
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.2;
`;
