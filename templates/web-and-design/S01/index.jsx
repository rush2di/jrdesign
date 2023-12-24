import Hero from "components/Hero";
import { _servicesHero } from "utils/constants/";

import styles from "./styles.module.scss";

const { services } = styles;

const ServicesHero = () => {
  return (
    <div className={services}>
      <Hero
        {...{
          title: _servicesHero.title,
          subTitles: _servicesHero.sub_tiltes,
          animate: false,
        }}
      />
    </div>
  );
};

export default ServicesHero;
