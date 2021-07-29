import Card from "../blogs/card";
import { Container, Cards, Header } from "./styles/blogs";

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
    </Container>
  );
};

export default BlogsComponent;
