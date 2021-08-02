import Link from "next/link";
import { Container, Header, Cards, Footer } from "./styles/projects";
import Card from "./card";

const ProjectsPage = ({ projects, page = false }) => {
  return (
    <Container page={page}>
      <Header>
        <h1>Recent Projects</h1>
        <div />
      </Header>
      <Cards>
        {projects.map((project) => {
          return (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              date={project.date}
              github={project.link}
              url={project.url}
            />
          );
        })}
      </Cards>
      <Footer>
        <Link href="/projects">
          <a>
            <h1>View all projects</h1>
          </a>
        </Link>
      </Footer>
    </Container>
  );
};

export default ProjectsPage;
