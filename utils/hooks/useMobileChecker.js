import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { isBrowser } from "utils/constants";
import { tawkWidget } from "utils/helpers";

const MobileChecker = createContext(null);

const MobileCheckerProvider = ({ children }) => {
  const [viewportMatch, setViewportMatch] = useState({
    isLoaded: null,
    isTablet: null,
    isMobile: null,
    dimensions: {
      width: null,
      height: null,
    },
  });

  if (isBrowser) {
    useEffect(() => {
      let subscribed = true;
      let timeoutID = null;

      const handleResize = () => {
        clearTimeout(timeoutID);

        if (
          window.innerWidth < 915 &&
          window.innerWidth > 500 &&
          viewportMatch.isTablet == false
        ) {
          timeoutID = setTimeout(() => {
            setViewportMatch({
              isLoaded: true,
              isTablet: true,
              isMobile: false,
              dimensions: {
                width: window.innerWidth,
                height: window.innerHeight,
              },
            });
          }, 150);
        } else if (
          window.innerWidth <= 500 &&
          viewportMatch.isMobile == false
        ) {
          timeoutID = setTimeout(() => {
            setViewportMatch({
              isLoaded: true,
              isTablet: false,
              isMobile: true,
              dimensions: {
                width: window.innerWidth,
                height: window.innerHeight,
              },
            });
          }, 150);
        } else if (
          window.innerWidth >= 915 &&
          (viewportMatch.isMobile == true || viewportMatch.isTablet == true)
        ) {
          timeoutID = setTimeout(() => {
            tawkWidget().showWidget();
            setViewportMatch({
              isLoaded: true,
              isTablet: false,
              isMobile: false,
              dimensions: {
                width: window.innerWidth,
                height: window.innerHeight,
              },
            });
          }, 150);
        }
      };

      if (viewportMatch.isLoaded === null && subscribed) handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        subscribed = false;
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  }

  const reaction = useCallback((callback) => {
    callback;
  });

  return (
    <MobileChecker.Provider value={[viewportMatch, reaction]}>
      {children}
    </MobileChecker.Provider>
  );
};

export const useMobileChecker = () => useContext(MobileChecker);

export default MobileCheckerProvider;
