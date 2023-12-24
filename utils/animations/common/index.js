import GSAP from "gsap";
import { splitLetters, splitLines } from "utils/helpers/textSplitters";
import { restoreToDefault } from "utils/helpers";
import { _setupSplit_Animation } from "../home";

export const splashScreen_Animation = (screenRef, logoRef) => {
  // const anim1 = GSAP.set(screenRef.current, { autoAlpha: 1 });
  const anim2 = GSAP.to(logoRef.current, {
    delay: 0.4,
    ease: "Expo.inOut",
    duration: 0.5,
    autoAlpha: 0,
    rotateX: "40deg",
    translateY: -40,
    scale: 0.95,
  });
  const anim3 = GSAP.to(screenRef.current, {
    opacity: 0,
    duration: 0.25,
    delay: 0.25,
  });

  return { anim2, anim3 };
};

export const setupParagraph_Animation_TL = (target, delay = false) => {
  const timeline = GSAP.timeline();
  const animationProperties = {
    delay: !!delay ? delay : 0,
    stagger: 0.15,
    opacity: 0,
    y: 20,
  };
  timeline.set(target, { y: 0, opacity: 1 });
  const quoteLines = splitLines(target, "<span>", "</span>");
  timeline.from(quoteLines, animationProperties, "-=0.25");

  return timeline;
};

export const setupSplit_Animation_TL = (
  targets,
  delay = false,
  duration = 0.65,
  fast = false
) => {
  const timeline = GSAP.timeline();
  const isFastOffset = fast == true ? "-=1.5" : "-=1";
  targets.forEach((quote) => {
    const quoteLetters = splitLetters(quote, "<span>", "</span>");
    const animationProperties = {
      ease: "Expo.inOut",
      y: 80,
      duration,
      opacity: 0,
      scale: 0.5,
      stagger: 0.055,
      rotationX: 120,
      transformOrigin: "0% 70% -10",
      delay: !!delay ? delay : 0,
      onComplete: () => setTimeout(() => restoreToDefault(quote), 3000),
    };
    timeline.from(quoteLetters, animationProperties, isFastOffset);
  });

  return timeline;
};

export const common_text_Animations = (tl, [titleTargets, paragraphTarget]) => {
  tl.add(setupSplit_Animation_TL(titleTargets), "-=1.75");
  tl.add(setupParagraph_Animation_TL(paragraphTarget), "-=1");
};
