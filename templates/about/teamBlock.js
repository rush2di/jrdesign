import GSAP from "gsap";
import { useRef, useContext } from "react";

import { animateOnClientSide } from "utils/helpers/";
import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { OnPageReadyContext } from "context/onPageReady";

export const TeamBlock = ({
  name,
  role,
  linkedin,
  email,
  phone,
  trigger,
  index,
  isMobile,
}) => {
  const { isReady } = useContext(OnPageReadyContext);
  const block = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (isReady) {
      isMobile === false &&
        animateOnClientSide(() => {
          GSAP.from(block.current, {
            scrollTrigger: {
              trigger: trigger,
              start: "top 60%",
            },
            duration: 1,
            opacity: 0,
            yPercent: 20,
            transformOrigin: "20% 70%",
            rotationX: 20,
            ease: "Expo.inOut",
            delay: parseFloat(`0.${index * 2}5`),
          });
        });
    }
  }, [isReady]);

  return (
    <div ref={block} className="section1__teamBlock">
      <span className="heading3">{name}</span>
      <p className="paragraph">{role}</p>
      <ul className="contactList">
        <li className="paragraph">
          <a href={linkedin} target="_blank">
            Linkedin
          </a>
        </li>
        <li className="paragraph">
          <a href={`mailto:${email}`}>Email</a>
        </li>
        {!!phone && (
          <li className="paragraph">
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TeamBlock;
