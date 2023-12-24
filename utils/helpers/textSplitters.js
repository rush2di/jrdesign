/**
 * -------------------------
 * TEXT SPLITTING FUNCTIONS
 * -------------------------
 *
 * functions to split text for animation purposes
 * inspired by GSAP SplitText plugin
 *
 * @param {HTMLElement} container
 * @param {String} opentag
 * @param {String} closingtag
 * @return { HTMLCollection } List of the new container child elements
 */

const splitLetters = (container, opentag, closingtag) => {
  container.innerHTML = container.textContent.replace(
    /\S/g,
    opentag + "$&" + closingtag
  );
  return container.children;
};

const splitWords = (container, opentag, closingtag) => {
  container.innerHTML = container.textContent.replace(
    /\S+/g,
    opentag + "$&" + closingtag
  );
};

const splitLines = (container, opentag, closingtag) => {
    let tmp = "";
    let top = 0;

    const aspectRatio = window && window.devicePixelRatio;
    container.innerHTML = container.textContent.replace(/\S+/g, "<n>$&</n>");
    container.style.width = Math.round(
      container.getBoundingClientRect().width / aspectRatio
    ) - 36;
    const spans = container.children;

    for (let i = 0; i < spans.length; i++) {
      let rect = Math.round(spans[i].getBoundingClientRect().top / aspectRatio);

      if (top < rect) tmp += closingtag + opentag;
      
      top = rect;
      tmp += spans[i].textContent + " ";
    }

    container.innerHTML = tmp += closingtag;
    return container.children;
};

export { splitLetters, splitLines, splitWords };
