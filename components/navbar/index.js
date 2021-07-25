import { Container, FlexWrapper, NavRightContainer } from "./styles/navbar";
import Logo from "./assets/logo";
import Toggle from "./toggle";
import { useTheme } from "@emotion/react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <span>
          <Link href="/">
            <a aria-label="Logo">
              <Logo />
            </a>
          </Link>
        </span>
        <NavRightContainer>
          <Link href="/blogs">
            <a>
              <span>Blogs</span>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <span>Projects</span>
            </a>
          </Link>
          <Toggle />
        </NavRightContainer>
      </FlexWrapper>
    </Container>
  );
};

export default NavbarComponent;
