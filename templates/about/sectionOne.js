import { useRef, useContext } from "react";
import { v4 as uuid } from "uuid";

import { setupSplit, animateParagraphs } from "utils/helpers/";
import { useIsomorphicLayoutEffect, useMobileChecker } from "utils/hooks/";
import { OnPageReadyContext } from "context/onPageReady";
import { _aboutSectionOne } from "utils/constants/";
import TeamBlock from "./teamBlock";

const SectionOne = ({ teamMembers }) => {
  const { isReady } = useContext(OnPageReadyContext);
  const { isMobile } = useMobileChecker();
  const containers = useRef([]);
  const title = useRef(null);
  const text = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (isMobile === false && isReady === true) {
      setupSplit(containers.current[1], [title.current]);
      animateParagraphs(containers.current[1], text.current, 1);
    }
  }, [isReady]);

  return (
    <>
      <div className="container">
        <div
          ref={(elem) => (containers.current[0] = elem)}
          className="covers__wrapper"
        >
          <img src="/assets/about__1.jpg" alt="jrdesign agency" />
          <img src="/assets/about__2.jpg" alt="jrdesign cover" />
        </div>
      </div>
      <section className="section1__wrapper">
        <div className="container">
          <div
            ref={(elem) => (containers.current[1] = elem)}
            className="section1__content"
          >
            <h3 className="heading2 animated">
              <div ref={title}>{_aboutSectionOne.title}</div>
            </h3>
            <p ref={text} className="paragraph">
              {_aboutSectionOne.text}
            </p>
          </div>
          <div className="section1__gridWrapper">
            <div
              className="grid2"
              ref={(elem) => (containers.current[2] = elem)}
            >
              {teamMembers.map((member, i) => {
                return (
                  <TeamBlock
                    isReady={isReady}
                    isMobile={isMobile}
                    index={i}
                    trigger={containers.current[2]}
                    {...member}
                    key={uuid()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
