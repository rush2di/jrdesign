import OnPageReady from "context/onPageReady";
import ContactHero from "templates/contact-us/hero";
import SectionOne from "templates/contact-us/sectionOne";
import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";

const ContactUs = ({ stylingTemplate }) => {
  return (
    <>
      <SEO
        title="Kontakt oss"
        description="har du tilbakemelding, forslag, eller vil du at vi skal bygge ditt neste prosjekt? Du kan kontakte oss via kontaktskjemaet, teamet vårt vil gjennomgå og svare på meldingen din på få minutter."
      />
      <main className={`section__main ${stylingTemplate}`}>
        <OnPageReady>
          <SplashScreen />
          <ContactHero />
          <SectionOne />
        </OnPageReady>
      </main>
    </>
  );
};

export default ContactUs;
