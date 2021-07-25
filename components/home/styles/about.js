import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary};
`;

export const AboutSection = styled.section`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageSection = styled.section`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Blob = styled.div`
  height: 70em;
  width: 72em;
  /* top: -30em;
  right: -70em; */
  background: #ffdd6e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  opacity: 0.1;
  position: absolute;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: 40px;
  border-bottom: 5px solid ${({ theme }) => theme.accentColor};
  display: inline-block;
`;
