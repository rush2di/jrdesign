import Section01 from "templates/blog/S01";
import Section02 from "templates/blog/S02";

const BlogTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <Section02 posts={templateProps.posts} />
    </>
  );
};

export default BlogTemplate;
