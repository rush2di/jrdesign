import Image from "next/image";
import { joinClassNames } from "utils/helpers";
import styles from "./styles.module.scss";

const { S03__wrapper } = styles;

const Section03 = () => {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <h3 className="txt-h4 font-weight-bold txt-center">
          Slik fungerer det
        </h3>
        <div
          className={joinClassNames([
            S03__wrapper,
            "d-flex align-start w-70 mx-auto mt-2-75 w-sm-90",
          ])}
        >
          <Card
            order={1}
            iconSrc="/assets/form.svg"
            title="Fyll ut skjemaet"
            text="Fortell oss om ditt behov og hva prosjektet går ut på ved hjelp av vårt enkle skjema."
          />
          <Card
            order={2}
            iconSrc="/assets/contract.svg"
            title="Motta tilbud"
            text="Deretter vil du motta tilbud fra flere byråer som er relevante for akkurat ditt prosjekt"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ iconSrc, order, title, text }) => {
  return (
    <div className="d-flex align-center flex-column m-1">
      <div style={{ height: 100 }} className="img__holder w-100">
        <Image
          src={iconSrc}
          objectFit="contain"
          objectPosition="center"
          alt="project_image"
          layout="fill"
        />
      </div>
      <span className="txt-center txt-h6 font-weight-bold my-0-75">
        {order} - {title}
      </span>
      <p className="txt-center">{text}</p>
    </div>
  );
};

export default Section03;
