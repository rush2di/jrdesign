import Script from "next/script";
import emailjs from "emailjs-com";
import { PageTransition } from "next-page-transitions";
import { ToastContainer } from "react-toastify";
import { Router } from "next/router";
import { useEffect } from "react";

import TawkMessenger from "components/TawkMessenger";
import Layout from "components/Layout";

import { initGSAPConfig } from "utils/animations/config";
import { MobileCheckerProvider } from "utils/hooks/";
import { checkConsented } from "utils/helpers/";

import "styles/globals.scss";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";

const NONE_CTA_PATHS = ["contact-us", "home", "make-an-offer"];

initGSAPConfig();
emailjs.init(process.env.NEXT_PUBLIC_USER_ID);

const MyApp = ({ Component, pageProps, router: { route } }) => {
  const pathname = route.replace(/\//, "");
  const includeCTA = !NONE_CTA_PATHS.includes(pathname);

  const handleRouteChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (checkConsented()) {
      window?.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  Router.events.on("routeChangeStart", handleRouteChange);

  return (
    <>
      <GoogleAnalytics />
      <TawkMessenger />
      <MobileCheckerProvider>
        <Layout includeCTA={includeCTA} includePartners={route === "/"}>
          <ToastContainer />
          <PageTransition
            timeout={250}
            classNames="page-transition"
            skipInitialTransition={true}
          >
            <Component {...pageProps} stylingTemplate={pathname} key={route} />
          </PageTransition>
        </Layout>
      </MobileCheckerProvider>
    </>
  );
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="hs-script-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        id="hs-script-loader"
        src="//js.hs-scripts.com/19948086.js"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });
          gtag('js', new Date());    
          gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
};

export default MyApp;
