import Link from "next/link";
import { joinClassNames } from "utils/helpers";
import styles from "./styles.module.scss";

const {
  packageCard__wrapper,
  packageCard__title,
  packageCard__light,
  packageCard__dark,
} = styles;

const PackageCard = ({
  title,
  price,
  btnText,
  list,
  text,
  bg = "",
  isDark = false,
  onClick,
}) => {
  const wrapperClassNames = joinClassNames([
    packageCard__wrapper,
    isDark ? packageCard__dark : packageCard__light,
    "card--bordered",
  ]);

  const titleClassNames = joinClassNames([
    packageCard__title,
    "w-100 txt-center color-light",
  ]);

  const titleStyles = !!bg ? { backgroundColor: bg } : {};

  return (
    <div className={wrapperClassNames}>
      <div style={titleStyles} className={titleClassNames}>
        {title}
      </div>
      <div
        className={`mb-0 mt-2 txt-normalcase txt-center txt-sm ${
          isDark ? "color-light" : ""
        }`}
      >
        {text}
      </div>
      <div className={`mb-0 mt-2 txt-h1 txt-center ${isDark ? "color-light" : ""}`}>
        {price}
      </div>
      <div
        className={`txt-label txt-normalcase txt-center txt-sm mb-2 ${
          isDark ? "color-light" : ""
        }`}
      >
        / per prosjekt
      </div>
      <hr />
      <ul className={`mt-2 ${isDark ? "color-light" : ""}`}>
        {list.map((text, i) => (
          <li key={"card" + i}>
            <PackageCardItem text={text} />
          </li>
        ))}
      </ul>
      <button
        onClick={(e) => onClick(e, title)}
        style={titleStyles}
        className="btn btn--bg-success mt-2 max-w-100 w-100 btn__prim"
      >
        {btnText}
      </button>
    </div>
  );
};

const PackageCardItem = ({ text }) => {
  return (
    <div className="mb-1 d-flex align-start">
      <span className="color-success fa fa-check-circle txt-h6"></span>
      <div className="txt-normalcase txt-md ml-1">{text}</div>
    </div>
  );
};

export default PackageCard;
