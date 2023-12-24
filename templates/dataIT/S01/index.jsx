import Hero from "components/Hero";
import styles from "./styles.module.scss";

const { section01 } = styles;

const Section01 = () => {
  const title = "Data og IT";
  const subTitles = ["Vi utfører det meste ", "innen data og IT", ""];
  return (
    <div className={section01}>
      <Hero {...{ title, subTitles, animate: false }} />
    </div>
  );
};

export default Section01;
