import GSAP from "gsap";

export const homeSectionOne_Animation = (targets, scrollTrigger) => {
  GSAP.from(targets[0], {
    scrollTrigger,
    duration: 1,
    yPercent: 80,
    opacity: 0,
    rotationY: 50,
    rotateX: -10,
    stagger: 0.3,
    ease: "Expo.inOut",
    transformOrigin: "70% 50%",
    delay: 2.75,
  });
  GSAP.from(targets[1], {
    scrollTrigger,
    duration: 0.95,
    y: 0,
    ease: "Expo.in",
    delay: 2.25,
  });
};

export const homeSectionOne_Animation_TL = (targets) => {
  const timeline = GSAP.timeline();
  timeline.from(targets[0], {
    yPercent: 80,
    opacity: 0,
    duration: 1,
    rotationY: 50,
    rotateX: -10,
    stagger: 0.3,
    ease: "Expo.inOut",
    transformOrigin: "70% 50%",
  });
  timeline.from(
    targets[1],
    {
      y: 0,
      ease: "Expo.in",
    },
    "-=0.95"
  );

  return timeline;
};

export const homeCovers_Animation = (lists, container) => {
  const timeline = GSAP.timeline();
  lists.current.forEach((v, i) => {
    if (i % 2) {
      timeline.to(v, {
        scrollTrigger: {
          trigger: container.current,
          start: "center bottom",
          end: "bottom top",
          scrub: true,
        },
        x: "15%",
      });
    } else {
      timeline.to(v, {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: "-19%",
      });
    }
  });
  return timeline;
};

export const homeSectionThree_Animation = (target, scrollTrigger) => {
  GSAP.from(target, {
    scrollTrigger,
    duration: 1.5,
    opacity: 0,
    yPercent: 20,
    transformOrigin: "20% 70%",
    rotationX: 20,
    stagger: 0.15,
    ease: "Expo.inOut",
    delay: 2.25,
  });
};

export const homeSectionThree_Animation_TL = (target) => {
  const timeline = GSAP.timeline();
  timeline.from(target, {
    duration: 1.5,
    opacity: 0,
    yPercent: 20,
    transformOrigin: "20% 70%",
    rotationX: 20,
    stagger: 0.15,
    ease: "Expo.inOut",
  });
  return timeline;
};

export const homeCarousel_Animation = ({
  images,
  imageList,
  infos,
  handleChange,
}) => {
  // Image transitions
  const exitUp = (index, duration) => {
    GSAP.to(images.current[index], {
      ease: "Elastic.in",
      delay: 0.15,
      zIndex: 0,
      duration,
      opacity: 0,
      scale: 0.8,
      rotateX: 100,
      y: -450,
    });
  };

  const enterUp = (index, duration) => {
    GSAP.to(images.current[index], {
      ease: "Expo.Out",
      opacity: 1,
      zIndex: 1,
      duration,
      delay: 0.2,
      scale: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
    });
  };

  const resetImagePos = (index) => {
    GSAP.set(images.current[index], {
      scale: 1.25,
      opacity: 0,
      zIndex: 0,
      y: 500,
      delay: 1,
    });
  };

  // Info Content transition
  const fadeIn = (index) => {
    GSAP.set(infos.current[index], {
      opacity: 0,
      y: 90,
    });
  };

  const fadeInEnter = (index, duration) => {
    GSAP.to(infos.current[index], {
      ease: "Expo.inOut",
      opacity: 1,
      duration,
      delay: 1.3,
      y: 0,
      rotateX: 0,
    });
  };

  const fadeOut = (index, duration) => {
    GSAP.to(infos.current[index], {
      ease: "Power3.inOut",
      opacity: 0,
      delay: 0.15,
      duration,
      y: -180,
      rotateX: 20,
    });
  };

  const animateSlides = () => {
    if (imageList.current.children[0].classList.contains("active")) {
      handleChange({ isActive1: false, isActive2: true, isActive3: false });
      //Image transition
      exitUp(0, 1.2);
      enterUp(1, 1.45);
      resetImagePos(2);
      resetImagePos(0);
      //Info content transition
      fadeOut(0, 0.55);
      fadeInEnter(1, 0.5);
      fadeIn(1);
    } else if (imageList.current.children[1].classList.contains("active")) {
      handleChange({ isActive1: false, isActive2: false, isActive3: true });
      //Image transition
      exitUp(1, 1.2);
      enterUp(2, 1.45);
      resetImagePos(0);
      resetImagePos(1);
      //Info content transition
      fadeOut(1, 0.55);
      fadeInEnter(2, 0.5);
      fadeIn(2);
    } else if (imageList.current.children[2].classList.contains("active")) {
      handleChange({ isActive1: true, isActive2: false, isActive3: false });
      //Image transition
      exitUp(2, 1.2);
      enterUp(0, 1.45);
      resetImagePos(1);
      resetImagePos(2);
      //Info content transition
      fadeOut(2, 0.55);
      fadeInEnter(0, 0.5);
      fadeIn(0);
    }
  };
  return [animateSlides, resetImagePos];
};
