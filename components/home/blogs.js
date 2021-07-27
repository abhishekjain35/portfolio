import Card from "../blogs/card";
import { Container, Cards } from "./styles/blogs";

const options = { year: "numeric", month: "long", day: "numeric" };
const BlogsComponent = ({ blogs }) => {
  console.log(blogs);
  return (
    <Container>
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
