import Image from "next/image";

import style from "./styles.module.scss";
import { cloudinaryImg, joinClassNames } from "utils/helpers";

const { section02__wrapper, section02__content, section02__cover } = style;

const Section02 = ({ post }) => {
  const { cover, title, html } = post;

  return (
    <div className="container">
      <div className={section02__wrapper}>
        <div className={joinClassNames(["elevation-1", section02__content])}>
          <div className={joinClassNames(["mb-2", section02__cover])}>
            <div className="img__holder w-100 h-100 ">
              <Image
                src={cloudinaryImg(cover)}
                objectPosition="center"
                objectFit="cover"
                layout="fill"
                alt={title}
              />
            </div>
          </div>
          <div
            className="px-3 px-sm-2"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section02;
