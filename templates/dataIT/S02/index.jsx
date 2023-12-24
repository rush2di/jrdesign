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

const SectionGrids = ({ name, coverOne, coverTwo, description, including }) => {
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
            />
          </div>
        </div>
      </div>
      <div className={section02__contentWrapper}>
        <h3 className="heading3">{name}</h3>
        <p className="paragraph">{description}</p>
        <ul className="mt-1 d-flex flex-wrap paragraph">
          {including.map((item) => (
            <li key={uuid()} className="bg-muted border-radius-100 font-main color-dark py-0-15 px-0-75 txt-normalcase txt-sm mb-0-45 mr-0-45">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section02;
