import { DOMElement } from "react";
import { buildUrl } from "cloudinary-build-url";
import { toast } from "react-toastify";
import GSAP from "gsap";

import { splitLetters, splitLines } from "./textSplitters";
import { isBrowser } from "utils/constants";

/**
 * ---------------------------------
 * initInputStyles
 * ---------------------------------
 *
 * works along with formik provided states and
 * setup styles accordingly
 *
 * @param { String } field
 * @param { FormikErrors } errors
 * @param { FormikTouched } touched
 * @param { FormikValues } values
 *
 * @return { String } className
 */

export const initInputStyles = (field, errors, touched, values) => {
  let classNames = { activeField: "", errorField: "", activeLabel: "" };

  if (!!touched[field] && errors[field]) {
    classNames = { ...classNames, errorField: "field__error" };
  } else {
    classNames = { ...classNames, errorField: "" };
  }
  if (!!touched[field]) {
    classNames = { ...classNames, activeField: "field__active" };
  } else {
    classNames = { ...classNames, activeField: "" };
  }
  if (!!values[field]) {
    classNames = { ...classNames, activeLabel: "label__active" };
  } else {
    classNames = { ...classNames, activeLabel: "" };
  }

  return classNames;
};

/**
 * ---------------------------------
 * updateSplitAspectRatio
 * ---------------------------------
 *
 * updates the dom elem split this is needed to handle
 * screen resize events
 *
 * @param { DOMElement } container
 */

export const updateSplitAspectRatio = (container) => {
  splitLines(container, "<span>", "</span>");
};

/**
 * ---------------------------------
 * setupSplit
 * ---------------------------------
 *
 * SetupSplit loops over the target array and splits
 * every text char of the html text elements passed
 * and animates it.
 * @see splitLetters
 *
 * @param { DOMElement } container
 * @param { Array<DOMElement> | HTMLCollection } targets
 * @param { Number | false } delay
 */

export const setupSplit = (container, targets, delay = false, start) => {
  const triggerOptions = {
    trigger: container,
    start: start || "top 60%",
  };
  const scrollTrigger = !!container ? triggerOptions : {};

  targets.forEach((quote) => {
    const quoteLetters = splitLetters(quote, "<span>", "</span>");

    const animationProperties = {
      scrollTrigger,
      duration: 0.85,
      ease: "Expo.inOut",
      y: 80,
      opacity: 0,
      stagger: 0.075,
      rotationX: 120,
      scale: 0.5,
      transformOrigin: "0% 70% -10",
      delay: !!delay ? delay : 0,
      onComplete: () => setTimeout(() => restoreToDefault(quote), 3000),
    };

    GSAP.from(quoteLetters, animationProperties);
  });
};

/**
 * ---------------------------------
 * animateParagraphs
 * ---------------------------------
 *
 * animateParagraphs loops over the target paragraph
 * and splits text content by lines and animates it.
 * @see splitLetters
 *
 * @param { DOMElement } container
 * @param { DOMElement } target
 * @param { Number | false } delay
 */

export const animateParagraphs = (
  container,
  target,
  delay = false,
  start,
  callback
) => {
  const triggerOptions = {
    trigger: container,
    start: start || "top 60%",
  };

  GSAP.set(target, { y: 0, opacity: 1 });

  const scrollTrigger = !!container ? triggerOptions : {};
  const quoteLines = splitLines(target, "<span>", "</span>");

  GSAP.from(quoteLines, {
    delay: !!delay ? delay : 0,
    scrollTrigger,
    ease: "Expo.inOut",
    stagger: 0.15,
    duration: 1,
    opacity: 0,
    y: 20,
    onComplete: callback,
  });
};

/**
 * ---------------------------------
 * filterCategories
 * ---------------------------------
 *
 * restores the splitted dom elem to it's default
 * structure
 *
 * @param {NodeList | DOMElement} target
 */

export const restoreToDefault = (target) => {
  target.innerHTML = target.innerHTML.replace(
    /<span ([^\r\n\t\f\v= '"]+)(?:=(["'])?((?:.(?!\2?\s+(?:\S+)=|\2))+.)\2?)?>|<\/span>/g,
    ""
  );
};

/**
 * ---------------------------------
 * filterCategories
 * ---------------------------------
 *
 * takes an array of objects containing info about
 * the category of projects, filters the categories
 * found
 *
 * @param { Array<Object> } projects
 * @return { Array<String> } array without duplicates
 */

export const filterCategories = (projects) => {
  let array = ["Alle kategorier"];
  projects.forEach((project) => (array = [...array, ...project.category]));

  return Array.from(new Set(array));
};

/**
 * ---------------------------------
 * fetchContent
 * ---------------------------------
 *
 * Helper async function that fetchs content frontmatter
 * data from local markdown files in content directory
 *
 * @param { String } path "parent directory name"
 * @param { Array<File> } files
 * @param { Boolean } includeText return text content alongside frontmatter or not. Defaults to false
 * @return { Promise } list of the projects data
 */

export const fetchContent = async (parentDir, files, includeText = false) => {
  return await Promise.all(
    files.map(async (fileName) => {
      const content = await import(`../../content/${parentDir}/${fileName}`);
      if (includeText) {
        return { ...content.attributes, html: content.html };
      } else {
        return { ...content.attributes };
      }
    })
  );
};

/**
 * ---------------------------------
 * animateOnClientSide
 * ---------------------------------
 *
 * check if the page is in client side to run animations
 *
 * @param {function)
 */
export const animateOnClientSide = (callback) => {
  window !== "undefined" && callback();
};

/**
 * successNotification | errorNotification
 * > functions to trigger the toast notifications
 */

export const successNotification = () => {
  toast("e-post sendt", {
    type: "success",
  });
};
export const errorNotification = () => {
  toast("feil, kunne ikke sende data", {
    type: "error",
  });
};

export const cloudinaryImg = (
  imgID,
  type,
  resizeEnable = false,
  quality = 75
) => {
  const cloudName = "djartpeww";
  const effect = "blur:1000";
  const resize = {
    width: 400,
    height: 200,
    type: "fill",
  };

  const transformationsBlur =
    resizeEnable === true ? { effect, quality, resize } : { effect, quality };
  const transformationsDef =
    resizeEnable === true ? { quality, resize } : { quality };

  switch (type) {
    case "blur":
      return buildUrl(imgID, {
        cloud: { cloudName },
        transformations: transformationsBlur,
      });
    default:
      return buildUrl(imgID, {
        cloud: { cloudName },
        transformations: transformationsDef,
      });
  }
};

export const mapImagesToCloudinary = (
  images,
  clean = true,
  resize = true,
  quality
) => {
  const cloudinaryPaths = images.map((src) => {
    const imgSrc = clean === true ? src : src.replace("/assets/projects/", "");
    return [
      cloudinaryImg(imgSrc, null, resize, quality),
      cloudinaryImg(imgSrc, "blur", true),
    ];
  });
  return cloudinaryPaths;
};

export const routeStyles = (route) => {
  if (route === "/") return "home";
  else if (route.includes("/projects-list/")) return "case-study";
  else return route.replace(/\//, "");
};

export const joinClassNames = (classNamesArray) => {
  return classNamesArray.join(" ");
};

export const tawkWidget = () => {
  if (isBrowser && window.Tawk_API) {
    return {
      showWidget: () =>
        typeof window.Tawk_API.showWidget === "function" &&
        window.Tawk_API.showWidget(),
      hideWidget: () =>
        typeof window.Tawk_API.hideWidget === "function" &&
        window.Tawk_API.hideWidget(),
    };
  } else {
    return {
      showWidget: () => {},
      hideWidget: () => {},
    };
  }
};

// function for checking whether visitor has consented before
export function checkConsented() {
  let decodedCookie = decodeURIComponent(document.cookie);
  decodedCookie = decodedCookie.split(";");
  decodedCookie = decodedCookie.find((cookie) => {
    return cookie.substring(0, 13) === "CookieConsent";
  });
  if (!decodedCookie) {
    return false;
  }
  if (decodedCookie.substring(14, 18) === "true") {
    return true;
  }
  return false;
}
