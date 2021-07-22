import NavbarComponent from "../navbar";
import { Container } from "./styles/home";
import particles from "./assets/particles.svg";

const HomeComponent = () => {
  console.log(particles);
  return (
    <Container style={{ backgroundImage: `url(${particles.src})` }}>
      <NavbarComponent />
      <h1>HII</h1>
    </Container>
  );
};

export default HomeComponent;
