import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import HamburgerMenu from "react-hamburger-menu";
import GSAP from "gsap";

import {
  triggerCloseAnimation,
  triggerOpenAnimation,
} from "utils/animations/menu";

import NavLink from "components/Layout/NavLink";
import { useMobileChecker } from "utils/hooks/";
import { _contactInfo } from "utils/constants/";

import Logo from "public/assets/logoWhite.svg";
import PhoneIcon from "public/assets/phone.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

const {
  navbar,
  navbar__active,
  navbar__logo,
  navbar__logoWrapper,
  navbar__mobile,
  navbar__mobileBtnWrapper,
  navbar__mobileFooter,
  navbar__mobileBtn,
  navbar__mobileWrapper,
} = styles;

const Header = () => {
  let animationTL = GSAP.timeline();

  const [{ isTablet, isMobile }] = useMobileChecker();
  const [isOpen, setIsOpen] = useState(false);

  const menuWrapper = useRef(null);
  const menuBtn = useRef(null);
  const menuItems = useRef([]);
  const menuExtra = useRef([]);
  const router = useRouter();

  const handleClick = () => {
    if (animationTL.isActive() === false) {
      setIsOpen((prevState) => !prevState);
    }
  };

  const handleRouteChange = (href) => {
    if (animationTL.isActive() === false) {
      setIsOpen(false);
      router.push(href);
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  useEffect(() => {
    let subscribed = true;
    let isDesktopScreen = isTablet === false && isMobile === false;
    let isLeftOpen = isDesktopScreen && isOpen === true;
    const html = document.querySelector("html");

    if (subscribed && isLeftOpen) setIsOpen(false);

    if (subscribed && isOpen) {
      html.style.overflow = "hidden";
      triggerOpenAnimation(animationTL, menuExtra, menuWrapper, menuItems);
    } else {
      html.style.overflow = "initial";
      triggerCloseAnimation(animationTL, menuExtra, menuWrapper, menuItems);
    }

    return () => {
      subscribed = false;
      animationTL.kill();
    };
  }, [isOpen, isTablet, isMobile]);

  return (
    <nav className={navbar}>
      <div
        className={`container ${isOpen ? "--mobileOpen" : "--mobileClosed"}`}
      >
        <div onClick={handleLogoClick} className={navbar__logoWrapper}>
          <Logo className={navbar__logo} />
        </div>
        <ul>
          <li className="medium">
            <NavLink href="/about-us" activeClassName={navbar__active}>
              <a>Om JR Design</a>
            </NavLink>
          </li>
          <li className="medium">
            <NavLink href="/projects" activeClassName={navbar__active}>
              <a>Prosjekter</a>
            </NavLink>
          </li>
          <li className="medium">
            <NavLink href="/web-and-design" activeClassName={navbar__active}>
              <a>Web & Design</a>
            </NavLink>
          </li>
          <li className="medium">
            <NavLink href="/data-it" activeClassName={navbar__active}>
              <a>Data og IT</a>
            </NavLink>
          </li>
          <li className="medium">
            <NavLink href="/blog" activeClassName={navbar__active}>
              <a>Blogg</a>
            </NavLink>
          </li>
          <li className="medium">
            <NavLink href="/contact-us" activeClassName={navbar__active}>
              <a>Kontakt</a>
            </NavLink>
          </li>
          <li>
            <Link href="/make-an-offer">
              <a className="btn">
                <span>Få tilbud</span>
                <PhoneIcon />
              </a>
            </Link>
          </li>
        </ul>
        <div className={navbar__mobile}>
          <div ref={menuBtn} className={navbar__mobileBtnWrapper}>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={40}
              height={20}
              strokeWidth={2.5}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
              className={navbar__mobileBtn}
            />
          </div>
          <div ref={menuWrapper} className={navbar__mobileWrapper}>
            <ul>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[0] = elem)}>Hjem</a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/about-us"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[1] = elem)}>
                    Om JR Design
                  </a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/projects"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[2] = elem)}>
                    Prosjekter
                  </a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/web-and-design"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[3] = elem)}>
                    Web & Design
                  </a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/data-it"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[4] = elem)}>
                    Data og IT
                  </a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/blog"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[5] = elem)}>Blogg</a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/contact-us"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[6] = elem)}>Kontakt</a>
                </NavLink>
              </li>
              <li className="medium">
                <NavLink
                  isMobile
                  handleRouteChange={handleRouteChange}
                  href="/make-an-offer"
                  activeClassName={navbar__active}
                >
                  <a ref={(elem) => (menuItems.current[7] = elem)}>Få tilbud</a>
                </NavLink>
              </li>
            </ul>
            <div className={navbar__mobileFooter}>
              <ul>
                <li>
                  <div ref={(elem) => (menuExtra.current[0] = elem)}>
                    <span>Adresse </span>
                    <a href={_contactInfo[2].link} rel="noopener">
                      {_contactInfo[2].text}
                    </a>
                  </div>
                </li>
                <li>
                  <div ref={(elem) => (menuExtra.current[1] = elem)}>
                    <span>Telefon </span>
                    <a href={`tel:${_contactInfo[1].link}`} rel="noopener">
                      {_contactInfo[1].text}
                    </a>
                  </div>
                </li>
                <li>
                  <div ref={(elem) => (menuExtra.current[2] = elem)}>
                    <span>E-post </span>
                    <a href="mailto:post@jrdesign.no" rel="noopener">
                      post@jrdesign.no
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Header);
