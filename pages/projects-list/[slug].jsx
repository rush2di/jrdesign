import fs from "fs";

import CaseStudyHero from "templates/case-study/hero";
import SectionOne from "templates/case-study/sectionOne";
import OnPageReady from "context/onPageReady";
import { fetchContent } from "utils/helpers/";
import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";

const ProjectCaseStudy = (props) => {
  const project = props.projectBySlug || false;

  return !!project ? (
    <>
      <SEO
        title={`${!!project ? project.title : "Prosjekt"} Casestudie`}
        description={props.projectBySlug.desc}
      />
      <main className={`section__main ${props.stylingTemplate}`}>
        <OnPageReady>
          <SplashScreen />
          <CaseStudyHero subTitle={project.title} />
          <SectionOne project={project} />
        </OnPageReady>
      </main>
    </>
  ) : (
    <div>unknown error occured please refresh the page</div>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/projects`);
  const projects = await fetchContent("projects", files);
  const paths = projects.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const files = fs.readdirSync(`${process.cwd()}/content/projects`);
  const projects = await fetchContent("projects", files);
  const projectBySlug = projects.filter((project) => project.slug === slug);
  return {
    props: {
      projectBySlug: projectBySlug[0],
    },
  };
};

export default ProjectCaseStudy;
