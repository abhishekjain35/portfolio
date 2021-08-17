import { Header } from "./styles/sectionTitle";

const SectionTitle = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
      <div />
    </Header>
  );
};

export default SectionTitle;
