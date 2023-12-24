import Image from "next/image";
import Link from "next/link";
import { cloudinaryImg, joinClassNames } from "utils/helpers";
import styles from "./styles.module.scss";

const { blogPostCard } = styles;

const BlogPost = ({ id, cover, title, intro }) => {
  return (
    <div
      className={joinClassNames([
        blogPostCard,
        "card card--bordered elevation-1",
      ])}
    >
      <div className="card__cover card__cover--overlayed">
        <Image
          src={cloudinaryImg(cover)}
          objectPosition="center"
          objectFit="cover"
          layout="fill"
          alt={title}
        />
        <div />
      </div>
      <div className="card__content">
        <div>
          <p className="txt">{intro}</p>
        </div>
        <div>
          <Link href={`/blog-post/${id}`}>
            <a className="btn btn--bg-success mt-1-50 w-100">Les mer</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
