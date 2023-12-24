import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { homeHero } from "utils/constants/";
import { setupSplit } from "utils/helpers/";
import styles from "./styles.module.scss";

const { header__wrapper, header__content } = styles;

const Section01 = ({ animate = false }) => {
  const quotes = useRef([]);

  useIsomorphicLayoutEffect(() => {
    if (animate) {
      setupSplit(
        quotes.current[0],
        [quotes.current[1], quotes.current[2]],
        true
      );
    }
  }, []);

  return (
    <header className={header__wrapper}>
      <div className="container">
        <div className={header__content}>
          <h1
            ref={(elem) => (quotes.current[0] = elem)}
            className="huge1 animated"
          >
            <div ref={(elem) => (quotes.current[1] = elem)}>
              {homeHero.title_a}
            </div>
            <div ref={(elem) => (quotes.current[2] = elem)}>
              {homeHero.title_b}
            </div>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Section01;
