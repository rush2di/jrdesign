import fs from "fs";

import SplashScreen from "components/SplashScreen";
import OnPageReady from "context/onPageReady";
import BlogPostTemplate from "templates/blog-post";
import SEO from "components/SEO";

import { cloudinaryImg, fetchContent } from "utils/helpers/";

const Home = ({ post }) => {
  const templateProps = { post };

  return (
    <>
      <SEO
        title={post.title}
        image={cloudinaryImg(post.cover)}
        description={post.intro}
      />
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<!-- Designed and developed by Rochdi Belhirch [github: @rush2di] under JR Design AS -->",
        }}
      ></div>
      <main className="section__main">
        <OnPageReady>
          <SplashScreen />
          <BlogPostTemplate templateProps={templateProps} />
        </OnPageReady>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);
  const posts = await fetchContent("posts", files);
  const paths = posts.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);
  const posts = await fetchContent("posts", files, true);
  const postByID = posts.filter((post) => post.id === id);

  return {
    props: {
      post: postByID[0],
    },
  };
}

export default Home;
