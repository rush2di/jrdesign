import Section01 from "templates/projects/S01";
import Section02 from "templates/projects/S02";

const ProjectsTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <Section02 projects={templateProps.projects} />
    </>
  );
};

export default ProjectsTemplate;
