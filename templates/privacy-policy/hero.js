import Hero from "components/Hero";
import { _privacyHero } from "utils/constants/";

const PrivacyHero = () => {
  return <Hero {...{ title: _privacyHero.title, subTitles: _privacyHero.sub_tiltes }} />;
};

export default PrivacyHero;
