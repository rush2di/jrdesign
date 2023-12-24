import CookieConsent from "react-cookie-consent";

import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Partners from "components/Layout/Partners";
import Guides from "components/Layout/GuidesFx";
import CTA from "components/Layout/CTA";

import styles from "./styles.module.scss";
import { _contactInfo } from "utils/constants/";
import { joinClassNames } from "utils/helpers";

const Layout = ({ children, includeCTA = false, includePartners = false }) => {
  const handleAccept = () => {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };

  return (
    <>
      <Header />
      <Guides />
      {children}
      <CTA mobile />
      {!!includePartners && <Partners />}
      {!!includeCTA && <CTA />}
      <CookieConsent
        buttonText="Aksepterer"
        containerClasses={joinClassNames([
          styles.cookieConsent,
          "container elevation-2 txt-md",
        ])}
        buttonClasses="btn btn--bg-light"
        declineButtonClasses="btn btn--bg-google mr-1"
        declineButtonText="Avslå"
        enableDeclineButton
        disableStyles
        onAccept={() => {
          handleAccept();
        }}
      >
        Vi bruker informasjonskapsler for å forbedre opplevelsen din på
        nettstedet vårt.
      </CookieConsent>
      <Footer />
    </>
  );
};

export default Layout;
