import Head from "next/head";

const SEO = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          property="image"
          content={props.image ? props.image : "/assets/thumbnail.jpg"}
        />
        <meta property="site_name" content="JR DESIGN" />
        <meta property="title" content={`JRDESIGN | ${props.title}`} />
        <meta property="description" content={props.description} />
        <meta
          property="og:image"
          content={props.image ? props.image : "/assets/thumbnail.jpg"}
        />
        <meta property="og:site_name" content="JR DESIGN" />
        <meta property="og:title" content={`JRDESIGN | ${props.title}`} />
        <meta property="og:description" content={props.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:title" content={`JRDESIGN | ${props.title}`} />
        <meta
          name="twitter:image"
          content={props.image ? props.image : "/assets/thumbnail.jpg"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta property="locale" content="no" />
        <meta property="og:locale" content="no" />
        <meta
          name="keywords"
          content="JRDESIGN,JR Design,JR Design As,bedrift hjemmeside,beste hjemmesider,beste nettside,beste webside,design av nettsider,design nettsider,designe nettside,designer nettbutikk,enkel hjemmeside,gratis nettsted,hjelp til hjemmeside,hjelp til nettside,hjemmeside bedrift,hjemmeside eller nettside,hjemmeside firma,hjemmeside for bedrift,hjemmeside med nettbutikk,hjemmeside til bedrift,hjemmeside utvikler,hva er en nettside,hva er et nettsted,hva er nettside,hva er nettsted,lage hjemmeside,lage hjemmeside med wordpress,lage hjemmeside selv,lage hjemmeside wordpress,lage nettside med wordpress,lage nettside wordpress,lage wordpress nettside,mobilvennlig nettside,nett side,nettbutikk,nettside,nettside designer,nettside firma,nettside for bedrift,nettside plattform,nettside til bedrift,nettside utvikler,nettside utvikling,nettside wordpress,nettsiden,nettsidene,nettsider bedrift,nettsider design,norsk webdesign,ny nettside,ny nettside bedrift,nye websider,om wordpress,opprette hjemmeside,profesjonell hjemmeside,responsive nettsider,seo optimalisering,tilbud nettside,trenger nettside,trenger ny nettside,utvikle hjemmeside,utvikle nettside,utvikle nettsider,utvikling av nettside,utvikling av nettsider,web design,web design firma,web design pris,web designer norge,webdesign,webdesign norge,webdesigner,webside firma,webutvikling,wordpress kurs,wordpress nettside,wordpress nettsider,wordpress sider"
        ></meta>
        <title>JR DESIGN | {props.title}</title>
      </Head>
    </>
  );
};

export default SEO;
