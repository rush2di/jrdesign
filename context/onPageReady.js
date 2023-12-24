import React, { useState, createContext, useRef } from "react";
import PageVisibility from "react-page-visibility";
import GSAP from "gsap";

import { useIsomorphicLayoutEffect } from "utils/hooks/";

export const OnPageReadyContext = createContext();

const _TIMEOUT_FIRST_MOUNT = 2500;
const _TIMEOUT_DEFAULT = 1000;

const OnPageReady = (props) => {
  let timeout;

  const isFirstMount = useRef(true);
  const [isReady, setIsReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    timeout = setTimeout(
      () => {
        if (isReady === false) setIsReady(true);
      },
      isFirstMount ? _TIMEOUT_FIRST_MOUNT : _TIMEOUT_DEFAULT
    );
      
    isFirstMount.current = false;
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const setReadyState = () => {
    setIsReady(true);
  };

  const handleVisiblity = (visible) => {
    if (visible) GSAP.globalTimeline.play();
    else GSAP.globalTimeline.pause();
  };

  useIsomorphicLayoutEffect(() => {
    if (isReady) GSAP.globalTimeline.play();
    else GSAP.globalTimeline.pause();
    return () => {
      if (isReady) setIsReady(false);
    };
  }, [isReady]);

  return (
    <>
      <PageVisibility onChange={handleVisiblity}>
        <OnPageReadyContext.Provider value={{ isReady, setReadyState }}>
          {props.children}
        </OnPageReadyContext.Provider>
      </PageVisibility>
    </>
  );
};

export default React.memo(OnPageReady);
