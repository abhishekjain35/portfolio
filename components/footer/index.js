import { Container, Wrapper, Link, Copyright, Links } from "./styles/footer";

export const BaseFooter = () => {
  return (
    <Container>
      <Links>
        <Link href="https://www.hackerrank.com/abhishekjai35">HackerRank</Link>
        <Link href="https://dev.to/abhishekjain35">DEV</Link>
      </Links>
      <div>
        <Copyright>made with ❤️ by @abhishek</Copyright>
      </div>
      <Links>
        <Link href="https://github.com/abhishekjain35">GitHub</Link>
        <Link href="https://leetcode.com/abhishekjai35/">LeetCode</Link>
      </Links>
    </Container>
  );
};

const Footer = () => {
  return (
    <Wrapper>
      <BaseFooter />
    </Wrapper>
  );
};

export default Footer;
