import Hero from "components/Hero";
import { _projectsHero } from "utils/constants/";

import styles from "./styles.module.scss";

const { projects } = styles;

const ProjectsHero = () => {
  return (
    <div className={projects}>
      <Hero
        {...{
          title: _projectsHero.title,
          subTitles: _projectsHero.sub_tiltes,
          animate: false,
        }}
      />
    </div>
  );
};

export default ProjectsHero;
