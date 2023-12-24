import GSAP from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { setupSplit_Animation_TL } from "utils/animations/common";
import { useIsomorphicLayoutEffect, useMobileChecker } from "utils/hooks/";

const Hero = ({ title, subTitles, animate = true }) => {
  const [{ isMobile }] = useMobileChecker();

  const canAnimate = isMobile === false && animate === true;

  const titleContainer = useRef(null);
  const mainTitle = useRef(null);
  const compTitle = useRef([]);

  useIsomorphicLayoutEffect(() => {
    let tl;

    if (canAnimate && !!titleContainer.current) {
      tl = GSAP.timeline({
        autoRemoveChildren: true,
        delay: 1,
      });
      tl.add(setupSplit_Animation_TL([mainTitle.current], false, 0.4));
      tl.add(setupSplit_Animation_TL(compTitle.current, false, 0.4), "-=0.5");
      ScrollTrigger.create({
        trigger: titleContainer.current,
        animation: tl,
        start: "top bottom",
      });
    }

    return () => {
      tl?.kill();
      tl?.ScrollTrigger?.kill();
    };
  }, [isMobile]);

  return (
    <header className="header__wrapper">
      <div className="container">
        <div
          ref={(elem) => (titleContainer.current = elem)}
          className="header__content"
        >
          {canAnimate ? (
            <>
              <h1 className="heading3 animated">
                <div ref={(elem) => (mainTitle.current = elem)}>{title}</div>
              </h1>
              <h2 className="heading2 animated">
                <div ref={(elem) => (compTitle.current[0] = elem)}>
                  {subTitles[0]}
                </div>
                <div ref={(elem) => (compTitle.current[1] = elem)}>
                  {subTitles[1]}
                </div>
                <div ref={(elem) => (compTitle.current[2] = elem)}>
                  {subTitles[2]}
                </div>
              </h2>
            </>
          ) : (
            <>
              <h1 className="heading3">{title}</h1>
              <h2 className="heading2">
                <span>{subTitles[0]}</span>
                <span>{subTitles[1]}</span>
                <span>{subTitles[2]}</span>
              </h2>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
