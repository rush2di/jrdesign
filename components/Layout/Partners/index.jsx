import Image from "next/image";
import styles from "./styles.module.scss";

const { sponsors__wrapper, sponsors__heading, sponsors__logosContainer } =
  styles;

const Partners = () => {
  return (
    <section className={sponsors__wrapper}>
      <div className="container">
        <div className={sponsors__heading}>
          <h3 className="heading3">Samarbeid</h3>
        </div>
        <div className={sponsors__logosContainer}>
          <a target="_blank" href="https://xn--byrguiden-72a.no/">
            <div className="img__holder">
              <Image
                src="/assets/sponsors/byr.png"
                alt="Byråguiden"
                objectPosition="center"
                objectFit="contain"
                layout="fill"
                loading="lazy"
                quality={55}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
