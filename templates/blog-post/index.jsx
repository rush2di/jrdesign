import Section01 from "templates/blog-post/S01";
import Section02 from "templates/blog-post/S02";

const BlogPostTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 postTitle={templateProps.post.title} />
      <Section02 post={templateProps.post} />
    </>
  );
};

export default BlogPostTemplate;
