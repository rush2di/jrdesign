import Link from "next/link";

import { _contactInfo } from "utils/constants";
import styles from "./styles.module.scss";

const { cta__wrapper, cta__content, cta__btn } = styles;

const CTA = ({ mobile = false }) => {
  if (mobile) {
    return (
      <a href={`tel:${_contactInfo[1].link}`} className={cta__btn}>
        <span className="fa fa-phone" />
        Ring oss i dag!
      </a>
    );
  } else {
    return (
      <div className={cta__wrapper}>
        <div className={cta__content}>
          <p className="heading3">
            Få tilbud på nytt nettsted, helt utforpliktende og gratis
          </p>
          <div className="animated__btn">
            <div className="dark" />
            <Link href="/contact-us">
              <a className="btn btn--bg-success">Kontakt</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default CTA;
