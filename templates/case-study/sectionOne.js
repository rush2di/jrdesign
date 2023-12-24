import { useRef, useContext } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { v4 as uuid } from "uuid";

import Image from "next/image";
import GSAP from "gsap";

import Blockquote from "public/assets/blockquote.svg";
import Typograph from "public/assets/Aa.svg";

import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { caseStudy_Animation } from "utils/animations/case-study";
import { OnPageReadyContext } from "context/onPageReady";
import { mapImagesToCloudinary } from "utils/helpers";
import { caseStudyText } from "utils/constants";

const SectionOne = ({ project }) => {
  const { isReady } = useContext(OnPageReadyContext);
  const headerImage = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (isReady == true) {
      const tl = GSAP.timeline({ autoRemoveChildren: true });
      tl.add(caseStudy_Animation(headerImage));

      ScrollTrigger.create({
        animation: tl,
        trigger: headerImage.current,
        start: "top 60%",
      });
    }
  }, [isReady]);

  const { cover, desktop, phone, tablet } = project;
  const images = mapImagesToCloudinary(
    [cover, desktop, phone, tablet],
    false,
    false,
    85
  );

  return (
    <>
      <div className="container">
        <div className="cover__wrapper">
          <div ref={headerImage} className="img__holder">
            <Image
              placeholder="blur"
              blurDataURL={images[0][1]}
              src={images[0][0]}
              alt={project.title}
              loading="eager"
              priority={true}
              className="img__fit"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <section className="section__wrapper">
        <div className="container">
          {!!project.problem && (
            <>
              <div className="section__head">
                <div className="grid2">
                  <h2 className="heading2 animated">
                    <div>{caseStudyText.problem}</div>
                  </h2>
                  <p className="paragraph">{project.problem}</p>
                </div>
              </div>
              <hr />
            </>
          )}
          <div className="section__body">
            {!!project.solution && (
              <div className="grid2">
                <div>
                  <h2 className="heading2 animated">
                    <div>{caseStudyText.solution}</div>
                  </h2>
                  <p className="paragraph">{project.solution}</p>
                </div>
              </div>
            )}
            <div className="grid2">
              <div className="illustration__wrapper">
                <div className="img__holder">
                  <Image
                    placeholder="blur"
                    src={images[1][0]}
                    blurDataURL={images[1][1]}
                    loading="eager"
                    priority={true}
                    alt={`${project.title} desktop`}
                    width={771}
                    height={774}
                    className="img__fit"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <div className="illustration__columns">
                <div className="illustration__wrapper">
                  <div className="img__holder">
                    <Image
                      placeholder="blur"
                      src={images[2][0]}
                      blurDataURL={images[2][1]}
                      loading="eager"
                      priority={true}
                      alt={`${project.title} phone`}
                      width={502}
                      height={397}
                      className="img__fit"
                      layout="intrinsic"
                    />
                  </div>
                </div>
                <div className="illustration__noBg">
                  <div className="img__holder">
                    <Image
                      placeholder="blur"
                      src={images[3][0]}
                      blurDataURL={images[3][1]}
                      loading="eager"
                      priority={true}
                      alt={`${project.title} tablet`}
                      width={783}
                      height={413}
                      className="img__fit"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>
            </div>
            {!!project.colors && (
              <div className="grid2">
                <div className="colors__content">
                  <h3 className="heading2">{caseStudyText.colors}</h3>
                  <p className="paragraph">{project.colors}</p>
                </div>
                <div className="colors__illustration">
                  {project.hexCodes.map((color) => (
                    <div key={uuid()} style={{ background: color }} />
                  ))}
                </div>
              </div>
            )}
            {!!project.typography && (
              <div className="grid2">
                <div className="typography__illustration">
                  <Typograph />
                </div>
                <div className="typography__content align-end">
                  <h3 className="heading2">{caseStudyText.typography}</h3>
                  <p className="paragraph">{project.typography.join(", ")}</p>
                </div>
              </div>
            )}
          </div>
          <div className="section__footer">
            {!!project.feedback && (
              <div
                className="cfeed__wrapper"
                style={{ background: project.hexCodes[2] }}
              >
                <div className="cfeed__content">
                  <Blockquote />
                  <p className="paragraph">{project.feedback}</p>
                </div>
                <div className="flex-row">- {project.clientName}</div>
              </div>
            )}
            <div className="generic__wrapper">
              <div className="generic__block">
                <h4 className="heading2">{caseStudyText.client}</h4>
                <p className="paragraph">{project.title}</p>
              </div>
              <div className="generic__block">
                <h4 className="heading2">{caseStudyText.mission}</h4>
                <p className="paragraph">{project.role.join(", ")}</p>
              </div>
              <div className="generic__block">
                <h4 className="heading2">{caseStudyText.url}</h4>
                <a href={project.link} rel="noopener" className="paragraph">
                  {project.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
