import Link from "next/link";

import { _contactInfo } from "utils/constants/";

import Logo from "public/assets/logoWhite.svg";
import styles from "./styles.module.scss";

const {
  footer__main,
  footer__logoWrapper,
  footer__logo,
  footer__menusWrapper,
  footer__menu,
  footer__end,
} = styles;

const _YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={footer__main}>
      <div className="container pb-sm-3">
        <div className="grid2">
          <div className={footer__logoWrapper}>
            <Logo className={footer__logo} />
            <span className="color-dark d-block txt-btn txt-sm-bold txt-uppercase">Org.nummer 922.251.282</span>
          </div>
          <div className={footer__menusWrapper}>
            <ul className={footer__menu}>
              <li>Meny</li>
              <li>
                <Link href="/">
                  <a>Hjem</a>
                </Link>
              </li>
              <li>
                <Link href="/web-and-design">
                  <a>Web & Design</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Prosjekter</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a>Om oss</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blogg</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
            <ul className={footer__menu}>
              <li>Kontakt</li>
              <li>
                <a href={`mailto:${_contactInfo[0].link}`}>E-post</a>
              </li>
              <li>
                <a href={`tel:${_contactInfo[1].link}`}>Telefon</a>
              </li>
              <li>
                <a
                  href={_contactInfo[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adresse
                </a>
              </li>
            </ul>
            <ul className={footer__menu}>
              <li>Sosiale medier</li>
              <li>
                <a
                  href={_contactInfo[3].link[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {_contactInfo[3].text[0]}
                </a>
              </li>
              <li>
                <a
                  href={_contactInfo[3].link[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {_contactInfo[3].text[1]}
                </a>
              </li>
              <li>
                <a
                  href={_contactInfo[3].link[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {_contactInfo[3].text[2]}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={footer__end}>
          <div className="medium">
            <span>WEBUTVIKLINGS- OG DESIGN BYRÅ</span>
          </div>
          <div className="medium">
            <Link href="/privacy-policy">
              <a>Personvern</a>
            </Link>
            <span>&copy; {_YEAR} jrdesign</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
