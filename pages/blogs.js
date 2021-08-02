import BlogsComponent from "../components/blogs";
import NavbarComponent from "../components/navbar";

const Blogs = ({ data }) => {
  return (
    <>
      <NavbarComponent />
      <BlogsComponent blogs={data} page={true} />
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://dev.to/api/articles?username=abhishekjain35`
  );
  const data = await res.json();
  return { props: { data } };
};
