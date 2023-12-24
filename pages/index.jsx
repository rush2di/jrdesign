import fs from "fs";

import SplashScreen from "components/SplashScreen";
import OnPageReady from "context/onPageReady";
import HomeTemplate from "templates/home";
import SEO from "components/SEO";

import { fetchContent } from "utils/helpers/";

const Home = ({ stylingTemplate, coversImages, illustrations, projects }) => {
  const templateProps = {
    covers: coversImages,
    data: projects,
    illustrations,
  };

  return (
    <>
      <SEO
        title="Webutvikling og Webdesign"
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
      <main className={`section__main ${stylingTemplate}`}>
        <OnPageReady>
          <SplashScreen />
          <HomeTemplate templateProps={templateProps} />
        </OnPageReady>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/projects`);
  const projects = await fetchContent("projects",files);
  const coversImages = [...new Array(20)].map((_, n) => `image_${n + 1}.jpg`);
  const illustrations = [...new Array(3)].map((_, n) => `seco0${n + 1}.jpg`);

  return {
    props: {
      projects,
      coversImages,
      illustrations,
    },
  };
}

export default Home;
