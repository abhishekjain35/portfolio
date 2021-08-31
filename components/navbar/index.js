import {
  Container,
  FlexWrapper,
  NavRightContainer,
  Hamburger,
  Modal,
} from "./styles/navbar";
import Logo from "./assets/logo";
import Toggle from "./toggle";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
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

  const handleClick = (e) => {
    if (e.target === "li") {
      setMenu(!menu);
    }
  };

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
          <Link href="/">
            <a>
              <span>Home</span>
            </a>
          </Link>
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
        <Toggle mobile={true} />
        <Hamburger onClick={() => setMenu(!menu)} open={menu}>
          <div
            className={menu ? `hamburger is-active` : `hamburger`}
            id="hamburger-6"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </Hamburger>
      </FlexWrapper>
      {menu ? (
        <Modal className="menu_list_container">
          <ul onClick={handleClick}>
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/blogs">
              <a>
                <li>Blogs</li>
              </a>
            </Link>
            <Link href="/projects">
              <a>
                <li>Projects</li>
              </a>
            </Link>
          </ul>
        </Modal>
      ) : null}
    </Container>
  );
};

export default NavbarComponent;
