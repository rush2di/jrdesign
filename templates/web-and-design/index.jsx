import Section01 from "templates/web-and-design/S01";
import Section02 from "templates/web-and-design/S02";

const ServicesTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <Section02 content={templateProps.services} />
    </>
  );
};

export default ServicesTemplate;
