import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSPlugin } from "gsap";
import GSAP from "gsap";

const _GSAP_CONFIG = {
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
};

export const _GSAP_TL_CONFIG = {
  autoRemoveChildren: true,
};

export const initGSAPConfig = () => {
  GSAP.registerPlugin(ScrollTrigger, CSSPlugin);
  GSAP.config(_GSAP_CONFIG);
};

