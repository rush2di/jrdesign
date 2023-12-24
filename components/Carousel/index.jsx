import React, { useState, useRef, useMemo } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { usePageVisibility } from "react-page-visibility";
import Image from "next/image";
import Link from "next/link";

import Chevron from "public/assets/arrowSM.svg";
import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { homeCarousel_Animation } from "utils/animations/home";
import { homeCarousel } from "utils/constants/";
import { cloudinaryImg, joinClassNames } from "utils/helpers/";
import styles from "./styles.module.scss";

const {
  carousel__container,
  carousel__bgWrapper,
  carousel__bgImage,
  carousel__content,
  carousel__title,
  carousel__info,
  carousel__stripes,
} = styles;

const _CAROUSEL_TIMEOUT = 5000;

const Carousel = ({ data }) => {
  let timer = null;

  let [containerRef, { isVisible }] = useTrackVisibility();
  const isPageVisible = usePageVisibility();
  let imageList = useRef(null);
  let images = useRef([]);
  let infos = useRef([]);

  const limitedData = useMemo(() => {
    const cleanData = data.filter((data) => !!data.carouselBg);
    return cleanData.length > 3 ? cleanData.slice(0, 3) : cleanData;
  }, []);

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const handleChange = (newState) => {
    setState((prevState) => (prevState = newState));
  };

  const [animateSlides, resetImagePos] = homeCarousel_Animation({
    imageList,
    images,
    infos,
    handleChange,
  });

  const activateTimer = () => {
    timer = setTimeout(() => {
      animateSlides();
    }, _CAROUSEL_TIMEOUT);
  };

  useIsomorphicLayoutEffect(() => {
    clearTimeout(timer);
    const isIntersectingAndVisible = isVisible === true && isPageVisible;
    if (isIntersectingAndVisible && timer === null) activateTimer();
    return () => {
      clearTimeout(timer);
    };
  }, [state, isVisible, isPageVisible]);

  useIsomorphicLayoutEffect(() => {
    let subscribed = true;
    if (subscribed) {
      resetImagePos(2);
      resetImagePos(1);
    }
    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className={carousel__container}>
        <div className={carousel__bgWrapper}>
          <div className={joinClassNames([carousel__title, "container"])}>
            <span>{homeCarousel.title}</span>
          </div>
          <ul ref={(elem) => (imageList.current = elem)}>
            <li className={state.isActive1 ? "active" : ""}>
              <div className={carousel__content}>
                <div
                  id="bg"
                  className={carousel__bgImage}
                  ref={(elem) => (images.current[0] = elem)}
                >
                  <Image
                    src={cloudinaryImg(limitedData[0].carouselBg)}
                    objectFit="cover"
                    objectPosition="center"
                    alt="project_image"
                    quality={55}
                    layout="fill"
                  />
                </div>
                <div className="container">
                  <div
                    id="info"
                    ref={(elem) => (infos.current[0] = elem)}
                    className={carousel__info}
                  >
                    <img src={limitedData[0].favicon} />
                    <span>{limitedData[0].title}</span>
                    <span>{limitedData[0].role.join(" & ")}</span>
                    <a href={limitedData[0].link} target="_blank">
                      <span>
                        {homeCarousel.btn_text} <Chevron />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className={state.isActive2 ? "active" : ""}>
              <div className={carousel__content}>
                <div
                  id="bg"
                  className={carousel__bgImage}
                  ref={(elem) => (images.current[1] = elem)}
                >
                  <Image
                    src={cloudinaryImg(limitedData[1].carouselBg)}
                    objectFit="cover"
                    objectPosition="center"
                    alt="project_image"
                    layout="fill"
                  />
                </div>
                <div className="container">
                  <div
                    id="info"
                    className={carousel__info}
                    ref={(elem) => (infos.current[1] = elem)}
                  >
                    <img src={limitedData[1].favicon} />
                    <span>{limitedData[1].title}</span>
                    <span>{limitedData[1].role.join(" & ")}</span>
                    <a href={limitedData[1].link} target="_blank">
                      <span>
                        {homeCarousel.btn_text} <Chevron />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className={state.isActive3 ? "active" : ""}>
              <div className={carousel__content}>
                <div
                  id="bg"
                  className={carousel__bgImage}
                  ref={(elem) => (images.current[2] = elem)}
                >
                  <Image
                    src={cloudinaryImg(limitedData[2].carouselBg)}
                    objectFit="cover"
                    objectPosition="center"
                    alt="project_image"
                    layout="fill"
                  />
                </div>
                <div className="container">
                  <div
                    id="info"
                    className={carousel__info}
                    ref={(elem) => (infos.current[2] = elem)}
                  >
                    <img src={limitedData[2].favicon} />
                    <span>{limitedData[2].title}</span>
                    <span>{limitedData[2].role.join(" & ")}</span>
                    <a href={limitedData[2].link} target="_blank">
                      <span>
                        {homeCarousel.btn_text} <Chevron />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className={carousel__stripes}>
            {limitedData.map((_item, index) => {
              if (index === 0)
                return (
                  <CarouselNavigation
                    key={`stripe${index}`}
                    activeStep={state.isActive1}
                    index={index}
                  />
                );
              if (index === 1)
                return (
                  <CarouselNavigation
                    key={`stripe${index}`}
                    activeStep={state.isActive2}
                    index={index}
                  />
                );
              if (index === 2)
                return (
                  <CarouselNavigation
                    key={`stripe${index}`}
                    activeStep={state.isActive3}
                    index={index}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const CarouselNavigation = ({ activeStep }) =>
  activeStep ? (
    <span style={{ opacity: 1 }}></span>
  ) : (
    <span style={{ opacity: 0.5 }}></span>
  );

const MemoizedCarousel = React.memo(Carousel);

export default MemoizedCarousel;
