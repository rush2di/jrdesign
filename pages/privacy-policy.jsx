import PrivacyHero from "templates/privacy-policy/hero";
import SectionOne from "templates/privacy-policy/sectionOne";
import OnPageReady from "context/onPageReady";
import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";

const PrivacyPolicy = (props) => {
  return (
    <>
      <main className={`section__main ${props.stylingTemplate}`}>
        <SEO
          title="Personvern"
          description="Personvernerklæringen handler om hvordan JR Design samler inn og
            bruker informasjon om besøkende på våre nettsteder. Erklæringen
            inneholder informasjon du har krav på når det samlesinn opplysninger
            fra nettstedet vårt (personopplysningsloven § 19), og generell
            informasjon om hvordan vi behandler personopplysninger
            (personopplysningsloven § 18, 1.ledd). JR Design er
            behandlingsansvarlig for virksomhetens behandling av
            personopplysninger. Det er frivillig for de som besøker nettsidene å
            oppgi personopplysninger i forbindelse med tjenester som å motta
            nyhetsbrev og benytte del- og tipstjenesten. Behandlingsgrunnlaget
            er samtykke fra den enkelte, med mindre annet er spesifisert."
        />
        <OnPageReady>
          <SplashScreen/>
          <PrivacyHero />
          <SectionOne />
        </OnPageReady>
      </main>
    </>
  );
};

export default PrivacyPolicy;
