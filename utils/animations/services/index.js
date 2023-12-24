import GSAP from "gsap";

export const _servicesSectionOne_Animation = (images, mobileConfig, index) => {
  const timeline = GSAP.timeline();
  timeline.from(images.current, {
    duration: mobileConfig ? 0.5 : 1,
    stagger: 0.25,
    y: 100,
    opacity: 0,
    ease: "Expo.inOut",
    delay: mobileConfig ? 1 : index === 0 ? 3.5 : 0,
  });
  return timeline;
};
