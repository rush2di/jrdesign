import fs from "fs";

import SEO from "components/SEO";
import SplashScreen from "components/SplashScreen";
import DataPageTemplate from "templates/dataIT";
import OnPageReady from "context/onPageReady";
import { cloudinaryImg } from "utils/helpers";

const DataIT = ({ stylingTemplate, services }) => {
  const templateProps = {
    services,
  };

  return (
    <>
      <SEO
        title="Tjenester"
        description="oppdage tjenestene JR Design tilbyr som: Webdesign, webutvikling, eshoputvikling og WordPress nettstedutvikling. Du kan få detaljert tilleggsinformasjon om hva hver tjeneste handler om ved å kontakte oss via post@jrdesign.no"
      />
      <main className={`section__main ${stylingTemplate}`}>
        <OnPageReady>
          <SplashScreen />
          <DataPageTemplate templateProps={templateProps} />
        </OnPageReady>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const file = fs.readdirSync(`${process.cwd()}/content/dataogit`);

  const content = await import(`../content/dataogit/${file[0]}`);
  const updatedServices = content.attributes.services.map(
    ({ coverOne, coverTwo, ...rest }) => ({
      ...rest,
      coverOne: cloudinaryImg(coverOne, null, false),
      coverOneBlur: cloudinaryImg(coverOne, "blur", true),
      coverTwo: cloudinaryImg(coverTwo, null, false),
      coverTwoBlur: cloudinaryImg(coverTwo, "blur", true),
    })
  );

  return {
    props: {
      services: updatedServices,
    },
  };
}

export default DataIT;
