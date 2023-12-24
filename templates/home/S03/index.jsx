import {
  useRef,
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { updateSplitAspectRatio, mapImagesToCloudinary } from "utils/helpers/";
import { useIsomorphicLayoutEffect, useMobileChecker } from "utils/hooks/";
import { homeSectionOne_Animation_TL } from "utils/animations/home";
import { common_text_Animations } from "utils/animations/common";
import { OnPageReadyContext } from "context/onPageReady";
import { homeSectionOne } from "utils/constants";
import styles from "./styles.module.scss";

const {
  section03__wrapper,
  section03__content,
  section03__covers,
  section03__coversWrapper,
  section03__coversBlock,
} = styles;

const Section03 = ({ illustrations }) => {
  const _ILLUSTRATIONS = mapImagesToCloudinary(illustrations);

  return (
    <section className={section03__wrapper}>
      <div className="container">
        <div className="grid2">
          <div className={section03__content}>
            <h1 className="huge2 animated">
              <div>{homeSectionOne.title_text[0]}</div>
              <div>{homeSectionOne.title_text[1]}</div>
              <div>{homeSectionOne.title_text[2]}</div>
            </h1>
            <h2 className="color-success mb-1 txt-h6">
              <div>{homeSectionOne.subtitle_text}</div>
            </h2>
            <p className="paragraph">{homeSectionOne.section_text}</p>
            <div className="animated__btn">
              <Link href="/data-it">
                <a className="btn btn--bg-success">
                  {homeSectionOne.contact_btn}
                </a>
              </Link>
            </div>
          </div>
          <div className={section03__covers}>
            <div className={section03__coversWrapper}>
              <div className={section03__coversBlock}>
                <div className="img__holder">
                  <Image
                    placeholder="blur"
                    blurDataURL={_ILLUSTRATIONS[0][1]}
                    src={_ILLUSTRATIONS[0][0]}
                    alt="JRDesign illustration"
                    objectFit="cover"
                    objectPosition="center"
                    layout="responsive"
                    height={224}
                    width={300}
                    quality={65}
                  />
                </div>
              </div>
              <div className={section03__coversBlock}>
                <div className="img__holder">
                  <Image
                    placeholder="blur"
                    blurDataURL={_ILLUSTRATIONS[1][1]}
                    src={_ILLUSTRATIONS[1][0]}
                    alt="JRDesign illustration"
                    objectFit="cover"
                    objectPosition="center"
                    layout="responsive"
                    height={224}
                    width={300}
                    quality={65}
                  />
                </div>
              </div>
              <div className={section03__coversBlock}>
                <div className="img__holder">
                  <Image
                    placeholder="blur"
                    blurDataURL={_ILLUSTRATIONS[2][1]}
                    src={_ILLUSTRATIONS[2][0]}
                    alt="JRDesign illustration"
                    objectFit="cover"
                    objectPosition="center"
                    layout="responsive"
                    height={224}
                    width={300}
                    quality={65}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
