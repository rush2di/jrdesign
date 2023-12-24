import Image from "next/image";
import { joinClassNames } from "utils/helpers";
import { GOOGLE_LOGO } from "./consatnts";
import styles from "./styles.module.scss";

const Section04 = ({ reviewsData }) => {
  return (
    <div className="bg-light relative">
      <div className="container py-5">
        <h4 className="txt-h4 font-weight-bold txt-center">Hva andre sier</h4>
        <div className="mt-4">
          <div className="row">
            <div className="col-12">
              <ReviewsHeader
                rating={reviewsData.rating}
                totalReviews={reviewsData.total_reviews}
              />
            </div>
            {reviewsData.reviews.map((review, i) => {
              return (
                <div
                  className="col-3 col-lg-4 col-md-6 col-xsm-12"
                  key={`r${i}`}
                >
                  <ClientReview {...{ review }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsHeader = ({ rating, totalReviews }) => {
  return (
    <div className="w-100 d-flex py-1 px-1-50 bg-white elevation-1 border-radius-100">
      <div
        className={joinClassNames([
          styles.ReviewHeader__wrapper,
          "d-flex w-100",
        ])}
      >
        <div className="align-start d-flex flex-column">
          <div className="align-center d-flex justify-start">
            <div className="bg-light p-0-25 d-flex align-center justify-center border-radius-100">
              <Image
                src={GOOGLE_LOGO}
                width={35}
                height={35}
                alt="Google logo"
              />
            </div>
            <span className="font-weight-medium ml-1 color-main">
              Vurdering av JR Design
            </span>
          </div>
          <div className="align-center d-flex justif-between mt-0-50 px-0-25 w-100">
            <span className="font-weight-bold txt-h5">{rating.toFixed(1)}</span>
            <Ratings rating={rating} className="mx-1-25 mx-sm-1" />
            <span className="color-comp font-comp txt-sm">
              {totalReviews} anmeldelser
            </span>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/JR+Design+AS/@58.5711681,5.6869272,17z/data=!4m7!3m6!1s0x463a154d154fc6cd:0x5c2c523029793ba6!8m2!3d58.5711681!4d5.6891212!9m1!1b1"
          className="btn btn--bg-success btn--square ml-auto w-fit"
          target="_blank"
        >
          Skriv anmeldelse
        </a>
      </div>
    </div>
  );
};

const ClientReview = ({ review }) => {
  return (
    <div
      className={joinClassNames([
        "w-100 bg-white py-1 px-1 border-radius-100 elevation-1",
        "d-flex flex-column align-center justify-start h-100",
      ])}
    >
      <div
        style={{
          width: 60,
          height: 60,
          backgroundImage: `url("${review.reviewAuthorImage}")`,
          backgroundSize: `contain`,
        }}
        className="mb-1"
      />
      <span className="txt-h6 font-bold txt-center">{review.reviewAuthor}</span>
      <Ratings rating={review.reviewRating} className="mx-sm-1" />
      <div className={styles.UserReview__text}>
        <p className="txt-center txt-md">{review.reviewText}</p>
      </div>
    </div>
  );
};

const Ratings = ({ rating, ...props }) => (
  <div
    className={joinClassNames([
      "d-flex align-center",
      props.className ? props.className : "",
    ])}
  >
    {[...new Array(5)].map((_, index) => (
      <span
        key={index}
        className={joinClassNames([
          "txt-h4 mx-0-25",
          index + 1 <= rating ? "color-warning" : "color-label",
        ])}
      >
        &#9733;
      </span>
    ))}
  </div>
);

export default Section04;
