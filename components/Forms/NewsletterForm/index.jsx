import Image from "next/image";

import { joinClassNames, mapImagesToCloudinary } from "utils/helpers";
import styles from "./styles.module.scss";

const { newsletter__wrapper, newsletter__overlay } = styles;

const NewsletterForm = () => {
  const bg = mapImagesToCloudinary(["image_5.jpg"]);

  return (
    <div className={newsletter__wrapper}>
      <div className="img__holder w-100 h-100">
        <Image
          src={bg[0][0]}
          blurDataURL={bg[0][1]}
          alt="JRDesign illustration"
          objectPosition="center"
          objectFit="cover"
          layout="fill"
          loading="lazy"
          quality={10}
        />
      </div>
      <div className={joinClassNames(["w-100 h-100", newsletter__overlay])}>
        <div className="container d-flex w-100 h-100">
          <div className="mx-auto d-flex align-items-center justify-content-center">
            <div className="content txt-center">
              <h5 className="heading3 color-light">Nyhetsbrev</h5>
              <h5 className="paragraph color-light">
                Abonner på vårt nyhetsbrev og hold deg oppdatert.
              </h5>
              <form
                method="post"
                action="https://jrdesign.mailmojo.no/forms/subscribe/21981/"
                target="_blank"
                data-type="subscription"
                className="d-flex align-items-center justify-content-center"
              >
                <div className="field mt-2 d-flex align-items-center justify-content-center mx-auto">
                  <input
                    className="input"
                    type="email"
                    id="mm-email"
                    name="email"
                    autoComplete="off"
                    placeholder="E-postadresse"
                    data-required="true"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn--bg-success txt-uppercase"
                  >
                    Meld meg på
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
