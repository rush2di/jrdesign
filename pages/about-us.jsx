import fs from "fs";

import AboutHero from "templates/about/hero";
import SectionOne from "templates/about/sectionOne";
import OnPageReady from "context/onPageReady";
import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";

const AboutUs = ({ teamMembers, stylingTemplate }) => {
  return (
    <>
      <SEO
        title="Om oss"
        description="JR DESIGN ER ET WEBUTVIKLINGS- OG DESIGN BYRÅ. VI BESTÅR AV 4 ANSATTE, OG HAR KONTOR I STAVANGER. VI LEVERER KOSTNADSEFFEKTIVE WEBLØSNINGER TIL SMÅ OG MELLOMSTORE BEDRIFTER I NORGE. VI ER OPPTATT AT DU SOM KUNDE SKAL FÅ MYE FOR PENGENE, OG AT DU DERFOR ALDRI SKAL BETALE FOR NOE DU IKKE HAR BRUK FOR. VÅRT MÅL ER AT KUNDEN ALLTID SKAL VÆRE 100% FORNØYD MED PRODUKTET SOM VI HAR UTVIKLET."
      />
      <main className={`section__main ${stylingTemplate}`}>
        <OnPageReady>
          <SplashScreen />
          <AboutHero />
          <SectionOne teamMembers={teamMembers} />
        </OnPageReady>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const file = fs.readdirSync(`${process.cwd()}/content/teamMembers`);

  const teamMembers = await import(`../content/teamMembers/${file[0]}`);

  return {
    props: {
      ...teamMembers.attributes,
    },
  };
}

export default AboutUs;
