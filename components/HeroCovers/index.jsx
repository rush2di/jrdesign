import Image from "next/image";
import React, { useRef, forwardRef, useMemo } from "react";
import { v4 as uuid } from "uuid";

import { useIsomorphicLayoutEffect, useMobileChecker } from "utils/hooks/";
import { joinClassNames, mapImagesToCloudinary } from "utils/helpers/";
import { homeCovers_Animation } from "utils/animations/home";
import styles from "./styles.module.scss";

const { covers__wrapper, covers__container, covers__list, covers__image } =
  styles;

const HeroCovers = ({ covers, animate = true }) => {
  const coverImages = mapImagesToCloudinary(covers);
  const [{ isMobile }] = useMobileChecker();
  const container = useRef(null);
  const lists = useRef([]);

  const columnsLimit = covers.length / 4 - 1;

  const coversLists = useMemo(() => {
    return [...new Array(columnsLimit)].map((v, i) => {
      const isEdge = i === 0 || i === columnsLimit - 1;

      if (isEdge == true && isMobile == true) {
        return new Array(5).fill(0);
      } else {
        return coverImages.slice(i * 5, i * 5 + 5);
      }
    });
  }, [isMobile]);

  useIsomorphicLayoutEffect(() => {
    let timeline = null;
    if (animate && container.current !== null) {
      timeline =
        isMobile == false ? homeCovers_Animation(lists, container) : null;
    } else if (isMobile == true && container.current !== null) {
      timeline != null && timeline.kill();
    }
    return () => {
      timeline != null && timeline.kill();
    };
  }, [isMobile]);

  return (
    <div className={covers__wrapper}>
      <div
        className={covers__container}
        ref={(elem) => (container.current = elem)}
      >
        {coversLists.map((listItems, i) => (
          <List
            key={uuid()}
            ref={(elem) => (lists.current[i] = elem)}
            covers={listItems}
            column={i}
          />
        ))}
      </div>
    </div>
  );
};

const List = forwardRef(({ column, covers }, ref) => {
  return (
    <div ref={ref} className={covers__list}>
      <Box index={column} image={covers[0]} />
      <Box index={column} image={covers[1]} />
      <Box index={column} image={covers[2]} />
      <Box index={column} image={covers[3]} />
      <Box index={column} image={covers[4]} />
    </div>
  );
});

const Box = ({ image }) => {
  return (
    <div className={joinClassNames([covers__image, "img__holder"])}>
      {image[0] && (
        <Image
          src={image[0]}
          alt="JRDesign illustration"
          objectPosition="center"
          placeholder="empty"
          objectFit="cover"
          layout="fill"
          loading="eager"
          quality={50}
        />
      )}
    </div>
  );
};

const MemoizedCovers = React.memo(HeroCovers);

export default MemoizedCovers;
