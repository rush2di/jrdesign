import OfferTemplate from "templates/offer";
import SEO from "components/SEO";

const Offer = ({ reviewsData }) => {
  const templateProps = {
    reviewsData,
  };

  return (
    <>
      <SEO
        title="Få tilbud"
        description="Jr design er et webutvikling og webdesign firma. vi tilbyr tjenester innen utvikling og design av nettsider og nettbutikker til bedrifter, virksomheter og oppstartselskap. 
    Jr design utvikler nettsider og nettbutikker som er responsiv, moderne og seo optimalisert. dette bidrar til at besøkende får en god brukeropplevelse og ofte kommer tilbake for å finne ut mer om bedriften, tjenestene eller handle varer. 
    Jr design kan lage nettsiden i wordpress og nettbutikken i woocommerce, eller utviklet siden fra bunn av med skreddersydde løsninger for dine behov."
      />
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<!-- Designed and developed by Rochdi Belhirch [github: @rush2di] under JR Design AS -->",
        }}
      ></div>
      <OfferTemplate {...{ templateProps }} />
    </>
  );
};

export async function getStaticProps() {
  const reviews = await fetch(
    "https://api.reviewsmaker.com/gmb/?placeid=ChIJzcZPFU0VOkYRpjt5KTBSLFw"
  );
  const reviewsData = await reviews.json();

  return {
    props: {
      reviewsData,
    },
  };
}

export default Offer;
