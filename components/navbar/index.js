import { Container, FlexWrapper, NavRightContainer } from "./styles/navbar";
import Logo from "./assets/logo";
import Toggle from "./toggle";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 95) {
        setScroll(true);
      }
      if (window.scrollY < 95) {
        setScroll(false);
      }
    });
  }, []);
  console.log(scroll);
  return (
    <Container scroll={scroll}>
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
