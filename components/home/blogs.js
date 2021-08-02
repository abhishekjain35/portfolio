import Card from "../blogs/card";
import { Container, Cards, Header, Footer } from "./styles/blogs";
import Link from "next/link";
import Constellation from "./assets/constellation.svg";

const options = { year: "numeric", month: "long", day: "numeric" };
const BlogsComponent = ({ blogs }) => {
  return (
    <Container>
      <Header>
        <h1>My Latest Blogs</h1>
        <div />
      </Header>
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
      <Footer>
        <Link href="/blogs">
          <a>
            <h1>View all blogs</h1>
          </a>
        </Link>
      </Footer>
    </Container>
  );
};

export default BlogsComponent;
