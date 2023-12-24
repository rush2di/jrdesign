import Hero from "components/Hero";
import { caseStudyText } from "utils/constants";

const CaseStudyHero = ({ subTitle }) => (
  <Hero {...{ title: caseStudyText.title, subTitles: [subTitle] }} />
);

export default CaseStudyHero;
