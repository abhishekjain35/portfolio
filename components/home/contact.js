import {
  Container,
  Lines,
  Title,
  Wrapper,
  P,
  SocialMedia,
  LeftContainer,
  RightContainer,
  Label,
  Link,
  ButtonContainer,
  Button,
  SectionTitle,
  SectionText,
  Footer,
} from "./styles/contact";

import { BaseFooter } from "../footer";

const Contacts = () => {
  return (
    <Container>
      <SectionTitle>Contacts</SectionTitle>
      <SectionText>contact me!</SectionText>
      <Lines className="lines">
        <div className="lines_i lines_i__1"></div>
        <div className="lines_i lines_i__2"></div>
        <div className="lines_i lines_i__3"></div>
        <div className="lines_i lines_i__4"></div>
        <div className="lines_i lines_i__5"></div>
        <div className="lines_i lines_i__6"></div>
        <div className="lines_i lines_i__7"></div>
        <div className="lines_i lines_i__8"></div>
        <div className="lines_i lines_i__9"></div>
        <div className="lines_i lines_i__10"></div>
      </Lines>
      <Wrapper>
        <Title>
          <P>Having a great idea?</P>
          <P>Let&apos;s Talk about it!</P>
        </Title>
        <SocialMedia>
          <LeftContainer>
            <Label>Twitter:</Label>
            <Link href="https://twitter.com/Abhishek_Jain35" target="_blank">
              twitter.com/Abhishek_Jain35
            </Link>
          </LeftContainer>
          <RightContainer>
            <Label>E-mail:</Label>
            <Link href="mailto:abhishekjai35@gmail.com">
              abhishekjai35@gmail.com
            </Link>
          </RightContainer>
        </SocialMedia>
        <ButtonContainer>
          <Button href="https://www.linkedin.com/in/abhishekjain35/">
            CONNECT WITH ME!
          </Button>
        </ButtonContainer>
      </Wrapper>
      <Footer>
        <BaseFooter />
      </Footer>
    </Container>
  );
};

export default Contacts;
