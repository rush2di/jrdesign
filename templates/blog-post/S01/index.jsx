import Hero from "components/Hero";
import { _blogPostHero } from "utils/constants/";

import styles from "./styles.module.scss";

const { blogpost } = styles;

const Section01 = ({ postTitle }) => {
  const titleArr = postTitle.split(" ");
  const [firstWord, ...rest] = titleArr;

  return (
    <div className={blogpost}>
      <Hero
        {...{
          animate: false,
          title: _blogPostHero.title,
          subTitles: [firstWord, rest.join(" "), ""],
        }}
      />
    </div>
  );
};

export default Section01;
