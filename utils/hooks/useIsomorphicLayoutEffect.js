import { useLayoutEffect, useEffect } from "react";
import { isBrowser } from "utils/constants";

const useIsomorphicLayoutEffect =
  isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
