import { tawkWidget } from "utils/helpers";

const triggerOpenAnimation = (
  animationTL,
  menuExtra,
  menuWrapper,
  menuItems
) => {
  animationTL
    .set(menuItems.current, {
      yPercent: 100,
      skewX: 10,
      skewY: 10,
      opacity: 0,
    })
    .set(menuExtra.current, { yPercent: 100, opacity: 0 })
    .to(menuWrapper.current, {
      duration: 0.5,
      autoAlpha: 1,
      ease: "Expo.inOut",
    })
    .to(menuItems.current, {
      duration: 0.75,
      yPercent: 0,
      delay: 0.5,
      opacity: 1,
      skewX: 0,
      skewY: 0,
      ease: "Expo.inOut",
      stagger: 0.15,
    })
    .to(
      menuExtra.current,
      {
        yPercent: 0,
        opacity: 1,
        ease: "Expo.inOut",
        stagger: 0.15,
      },
      "-=1"
    )
    .play();
    tawkWidget().hideWidget();
};

const triggerCloseAnimation = (
  animationTL,
  menuExtra,
  menuWrapper,
  menuItems
) => {
  animationTL
    .to(menuItems.current, {
      duration: 0.75,
      yPercent: 100,
      opacity: 0,
      skewX: -10,
      skewY: -5,
      ease: "Expo.out",
      stagger: 0.05,
    })
    .to(
      menuExtra.current,
      {
        duration: 0.75,
        yPercent: 100,
        opacity: 0,
        ease: "Expo.inOut",
        stagger: 0.15,
      },
      "-=0.65"
    )
    .to(menuWrapper.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "Expo.inOut",
    })
    .play();
  tawkWidget().showWidget();
};

export { triggerOpenAnimation, triggerCloseAnimation };
