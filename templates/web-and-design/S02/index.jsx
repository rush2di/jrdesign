import { v4 as uuid } from "uuid";
import Image from "next/image";

import { _servicesSection02_Animation } from "utils/animations/services/";
import styles from "./styles.module.scss";

const {
  section02__covers,
  section02__wrapper,
  section02__coverWrapper,
  section02__contentWrapper,
} = styles;

const Section02 = ({ content }) => {
  return (
    <section className={section02__wrapper}>
      <div className="container">
        {content.map((service, index) => (
          <SectionGrids key={uuid()} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const SectionGrids = ({ name, coverOne, coverTwo, description }) => {
  return (
    <div className="grid2">
      <div className={section02__coverWrapper}>
        <div className={section02__covers}>
          <div>
            <Image
              src={coverOne}
              layout="responsive"
              className="img__fit"
              loading="eager"
              priority={true}
              width={641}
              height={427}
              alt={`JRDESIGN AS ${name}`}
              quality={70}
            />
          </div>
          <div>
            <Image
              src={coverTwo}
              layout="responsive"
              className="img__fit"
              loading="eager"
              priority={true}
              width={641}
              height={427}
              alt={`JRDESIGN AS ${name}`}
              quality={55}
            />
          </div>
        </div>
      </div>
      <div className={section02__contentWrapper}>
        <h3 className="heading3">
          <div>{name}</div>
        </h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Section02;
