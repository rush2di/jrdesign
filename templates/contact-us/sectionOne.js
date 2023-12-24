import { useRef } from "react";
import { v4 as uuid } from "uuid";
import GSAP from "gsap";

import ContactForm from "./contactForm";
import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { _contactInfo } from "utils/constants/";

const SectionOne = () => {
  const container = useRef(null);

  return (
    <section className="section__wrapper">
      <div className="container">
        <div className="grid2">
          <ContactForm />
          <div
            ref={container}
            className="section__addressesWrapper flex-column"
          >
            {_contactInfo.map((content, i) => (
              <ContactLink
                trigger={container.current}
                index={i}
                key={uuid()}
                {...content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ContactLink:
 *  > responsible of rendering the followings
 *  - Email
 *  - Phone number
 *  - Address
 *  - Social media links
 */
const ContactLink = ({ type, link, title, text, trigger, index }) => {
  const block = useRef(null);

  const typeChecker = () => {
    switch (type) {
      case "mail":
        return link.replace(/^/, "mailto:");
      case "phone":
        return link.replace(/^/, "tel:");
      default:
        return link;
    }
  };

  useIsomorphicLayoutEffect(() => {
    let scrollTrigger = { trigger, start: "top 65%" };

    GSAP.from(block.current, {
      scrollTrigger,
      duration: 1,
      stagger: 0.25,
      opacity: 0,
      yPercent: 20,
      delay: parseFloat(`1.${index * 2}5`),
      ease: "Expo.inOut",
    });
  });

  return (
    <div ref={block} className="section__addresses flex-column">
      <span className="heading3">{title}</span>
      {typeof link === "string" ? (
        <a href={typeChecker()} rel="noopener" target="_blank">
          {text}
        </a>
      ) : (
        link.map((item, index) => {
          return (
            <a key={uuid()} href={item} rel="noopener">
              {text[index]}
            </a>
          );
        })
      )}
    </div>
  );
};

export default SectionOne;
