import Hero from "components/Hero";

const ContactHero = () => {
  const title = "kontakt";
  const subTitles = [
    "Fyll ut skjemaet under med ",
    "din forespørsel så vil ",
    "vi kontakte deg",
  ];
  return <Hero {...{ title, subTitles, animate: false }} />;
};

export default ContactHero;
