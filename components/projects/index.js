import Link from "next/link";
import { Container, Header, Cards, Footer } from "./styles/projects";
import SectionTitle from "../reusable-components/SectionTitle";
import Card from "./card";
import MainFooter from "../reusable-components/footerWrapper";

const ProjectsPage = ({ projects, page = false }) => {
  return (
    <Container page={page}>
      <SectionTitle title="Recent Projects" />
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
      {!page ? (
        <Footer>
          <Link href="/projects">
            <a>
              <h1>View all projects</h1>
            </a>
          </Link>
        </Footer>
      ) : null}
      {page ? <MainFooter /> : null}
    </Container>
  );
};

export default ProjectsPage;
