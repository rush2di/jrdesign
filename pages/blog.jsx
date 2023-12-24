import fs from "fs";

import SplashScreen from "components/SplashScreen";
import OnPageReady from "context/onPageReady";
import BlogTemplate from "templates/blog";
import SEO from "components/SEO";

import { fetchContent } from "utils/helpers/";

const Home = ({ posts }) => {
  const templateProps = { posts };

  return (
    <>
      <SEO
        title="Hjem"
        description="Jr design er et webutvikling og webdesign firma. vi tilbyr tjenester innen utvikling og design av nettsider og nettbutikker til bedrifter, virksomheter og oppstartselskap. 
        Jr design utvikler nettsider og nettbutikker som er responsiv, moderne og seo optimalisert. dette bidrar til at besøkende får en god brukeropplevelse og ofte kommer tilbake for å finne ut mer om bedriften, tjenestene eller handle varer. 
        Jr design kan lage nettsiden i wordpress og nettbutikken i woocommerce, eller utviklet siden fra bunn av med skreddersydde løsninger for dine behov."
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
          <BlogTemplate templateProps={templateProps} />
        </OnPageReady>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);
  const posts = await fetchContent("posts", files);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
