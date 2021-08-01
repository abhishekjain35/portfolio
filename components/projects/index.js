import { Container, Header, Cards } from "./styles/projects";
import Card from "./card";

const ProjectsPage = ({ projects }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ProjectsPage;
