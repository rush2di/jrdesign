import fs from "fs";

import OnPageReady from "context/onPageReady";
import { fetchContent } from "utils/helpers/";
import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";
import ProjectsTemplate from "templates/projects";

const Projects = ({ projects }) => {
  const templateProps = {
    projects,
  };

  return (
    <>
      <SEO
        title="Prosjekter"
        description="Oppdag alt prosjektet gjort av JR DESIGN, eller bla gjennom dem ved å velge en av følgende kategorier: webutvikling, wordpress, UI / UX-design og mer"
      />
      <OnPageReady>
        <main className={`section__main `}>
          <SplashScreen />
          <ProjectsTemplate templateProps={templateProps} />
        </main>
      </OnPageReady>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/projects`);
  const projects = await fetchContent("projects", files);

  return {
    props: {
      projects,
    },
  };
}
