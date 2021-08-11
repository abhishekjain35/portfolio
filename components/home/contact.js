import { Container, Lines, Title, Wrapper, P } from "./styles/contact";

const Contacts = () => {
  return (
    <Container>
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
      </Wrapper>
    </Container>
  );
};

export default Contacts;
