import { homeSectionThree } from "utils/constants/";
import { joinClassNames } from "utils/helpers/";

import styles from "./styles.module.scss";

const {
  section05__wrapper,
  section05__mainContent,
  section05__secContent,
  section05__blockContent,
} = styles;

const Section05 = () => {
  return (
    <section className={section05__wrapper}>
      <div className="container">
        <div className="grid2">
          <div className={section05__mainContent}>
            <h2 className="huge2 animated">
              <div>{homeSectionThree.title_text[0]}</div>
              <div>{homeSectionThree.title_text[1]}</div>
              <div>{homeSectionThree.title_text[2]}</div>
            </h2>
            <p className="paragraph">{homeSectionThree.section_text}</p>
          </div>
          <div className={joinClassNames([section05__secContent, "grid2"])}>
            <div className={section05__blockContent}>
              <h3 className="heading3">
                {homeSectionThree.section_cards[0].title}
              </h3>
              <p className="paragraph">
                {homeSectionThree.section_cards[0].text}
              </p>
            </div>
            <div className={section05__blockContent}>
              <h3 className="heading3">
                {homeSectionThree.section_cards[1].title}
              </h3>
              <p className="paragraph">
                {homeSectionThree.section_cards[1].text}
              </p>
            </div>
            <div className={section05__blockContent}>
              <h3 className="heading3">
                {homeSectionThree.section_cards[2].title}
              </h3>
              <p className="paragraph">
                {homeSectionThree.section_cards[2].text}
              </p>
            </div>
            <div className={section05__blockContent}>
              <h3 className="heading3">
                {homeSectionThree.section_cards[3].title}
              </h3>
              <p className="paragraph">
                {homeSectionThree.section_cards[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
