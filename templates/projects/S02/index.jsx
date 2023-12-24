import Link from "next/link";
import Image from "next/image";
import { shuffle } from "lodash";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import { useIsomorphicLayoutEffect } from "utils/hooks/";
import { filterCategories, cloudinaryImg } from "utils/helpers/";
import styles from "./styles.module.scss";

const {
  projectCard__wrapper,
  projectCard__content,
  projectCard__shapeWrapper,
  projectCard__contentWrapper,
  projectCard__icon,
  projectCard__coverWrapper,
  projectCard__coverOverlayLeft,
  projectCard__coverOverlay,
  projectCard__coverOverlayRight,
  projectCard__coverOverlayCenter,
  projectCard__shape,
} = styles;

const ProjectsList = ({ projects }) => {
  const [list, setList] = useState([]);

  useIsomorphicLayoutEffect(() => {
    if (list.length === 0) setList(projects);
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ marginTop: 100, display: "flex", flexDirection: "column" }}
      >
        {shuffle(list).map((project, i) => (
          <ProjectCard key={uuid()} project={project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project }) => {
  const {
    logo,
    slug,
    desc,
    link,
    intro,
    title,
    solution,
    hexCodes,
    category,
    background,
  } = project;

  const [bgImage, bgPlaceholder] = [
    cloudinaryImg(background, null, false),
    cloudinaryImg(background, "blur", false),
  ];

  return (
    <>
      <div className={projectCard__wrapper} style={{ background: hexCodes[2] }}>
        <div className={projectCard__contentWrapper}>
          <div className={projectCard__content}>
            <div className={projectCard__shapeWrapper}>
              <div
                className={projectCard__shape}
                style={{ background: hexCodes[2] }}
              />
            </div>
            <span className="medium">{category.join(", ")}</span>
            <h3 className="heading2">{intro}</h3>
            <p className="paragraph">{desc}</p>
          </div>
          <div className="d-flex">
            {!!solution ? (
              <Link href={`/projects-list/${slug}`}>
                <a className="mr-1-50">
                  Mer info <span className="fa fa fa-bookmark-o ml-0-50"></span>
                </a>
              </Link>
            ) : (
              <a target={"_blank"} href={link}>
                Nettsiden
                <span className="fa fa-external-link ml-0-50"></span>
              </a>
            )}
          </div>
          <img className={projectCard__icon} src={logo} alt={`${title} icon`} />
        </div>
        <div className={projectCard__coverWrapper}>
          <div className="img__holder">
            <Image
              src={bgImage}
              placeholder="blur"
              blurDataURL={bgPlaceholder}
              layout="fill"
              alt={`${title} background`}
              className="img__fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
