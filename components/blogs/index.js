import Card from "./card";
import { Container, Cards, Footer, FooterWrapper } from "./styles";
import SectionTitle from "../reusable-components/sectionTitle";
import Link from "next/link";
import MainFooter from "../reusable-components/footerWrapper";

const options = { year: "numeric", month: "long", day: "numeric" };
const BlogsComponent = ({ blogs, page = false }) => {
  return (
    <Container page={page}>
      <SectionTitle title="My Latest Blogs" />
      <Cards>
        {blogs.map((blog) => {
          let date = new Date(blog.published_timestamp);
          date = date.toLocaleString("en-IN", options);
          return (
            <Card
              key={blog.id}
              image={blog.cover_image}
              likes={blog.public_reactions_count}
              date={date}
              title={blog.title}
              description={blog.description}
              url={blog.url}
            />
          );
        })}
      </Cards>
      {!page ? (
        <Footer>
          <Link href="/blogs">
            <a>
              <h1>View all blogs</h1>
            </a>
          </Link>
        </Footer>
      ) : null}
      {page ? <MainFooter /> : null}
    </Container>
  );
};

export default BlogsComponent;
