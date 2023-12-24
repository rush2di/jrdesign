import { v4 as uuidv4 } from "uuid";

import { BlogPostCard } from "components/Cards";
import styles from "./styles.module.scss";

const { section02 } = styles;

const Section02 = ({ posts }) => {
  return (
    <div className={section02}>
      <div className="py-5">
        <div className="container">
          <div className="row">
            {posts.map(({ id, cover, title, intro }) => {
              return (
                <div key={uuidv4()} className="col-4 col-md-6 col-sm-12">
                  <BlogPostCard
                    id={id}
                    cover={cover}
                    title={title}
                    intro={intro}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
