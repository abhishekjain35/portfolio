import {
  Container,
  Wrapper,
  Link,
  Copyright,
  Links,
  IconContainer,
  Icons,
} from "./styles/footer";
import TwitterIcon from "./icons/twitter";
import GithubIcon from "./icons/github";
import DevIcon from "./icons/dev";
import HackerrankIcon from "./icons/hackerrank";
import LeetcodeIcon from "./icons/leetcode";

export const BaseFooter = () => {
  return (
    <Container>
      <Links>
        <Link href="https://www.hackerrank.com/abhishekjai35">HackerRank</Link>
        <Link href="https://dev.to/abhishekjain35">DEV</Link>
      </Links>
      <IconContainer>
        <Icons>
          <li>
            <a
              href="https://github.com/abhishekjain35"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/abhishekjain35"
              target="_blank"
              rel="noreferrer"
            >
              <DevIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Abhishek_Jain35"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/abhishekjai35"
              target="_blank"
              rel="noreferrer"
            >
              <HackerrankIcon />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/abhishekjai35/"
              target="_blank"
              rel="noreferrer"
            >
              <LeetcodeIcon />
            </a>
          </li>
        </Icons>
        <Copyright>made with ❤️ by @abhishek</Copyright>
      </IconContainer>
      <Links>
        <Link href="https://github.com/abhishekjain35">GitHub</Link>
        <Link href="https://leetcode.com/abhishekjai35/">LeetCode</Link>
      </Links>
    </Container>
  );
};

export default BaseFooter;
