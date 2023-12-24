import Hero from "components/Hero";
import { _blogHero } from "utils/constants/";

import styles from "./styles.module.scss";

const { blog } = styles;

const Section01 = () => {
  return (
    <div className={blog}>
      <Hero
        {...{
          title: _blogHero.title,
          subTitles: _blogHero.sub_tiltes,
          animate: false,
        }}
      />
    </div>
  );
};

export default Section01;
