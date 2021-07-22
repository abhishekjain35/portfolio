import { Container, FlexWrapper, NavRightContainer } from "./styles/navbar";
import Logo from "./assets/logo";

const NavbarComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <span>
          <Logo />
        </span>
        <NavRightContainer>
          <span>Blogs</span>
          <span>Projects</span>
          <span>Night Mode</span>
        </NavRightContainer>
      </FlexWrapper>
    </Container>
  );
};

export default NavbarComponent;
