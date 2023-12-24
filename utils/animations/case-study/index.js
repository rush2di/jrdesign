import GSAP from "gsap";

export const caseStudy_Animation = (target) => {
  const timeline = GSAP.timeline();
  GSAP.from(target.current, {
    transformOrigin: "10% 100%",
    ease: "Expo.inOut",
    yPercent: 20,
    duration: .85,
    opacity: 0,
    delay: 1.75,
  });
  return timeline;
};
