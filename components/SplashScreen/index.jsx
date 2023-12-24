import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { splashScreen_Animation } from "utils/animations/common";

import Logo from "public/assets/logoWhite.svg";
import styles from "./styles.module.scss";

const { loading, loading__logo } = styles;

const SplashScreen = () => {
  const isFirstMount = useRef(true);
  const screenRef = useRef(null);
  const logoRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const { anim2, anim3 } = splashScreen_Animation(screenRef, logoRef);
    isFirstMount.current = false;
    return () => {
      anim2.kill();
      anim3.kill();
    };
  }, []);

  return (
    <div ref={screenRef} className={loading}>
      {isFirstMount.current && (
        <div ref={logoRef} className={loading__logo}>
          <Logo />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
