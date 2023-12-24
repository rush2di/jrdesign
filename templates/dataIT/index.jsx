import Section01 from "templates/dataIT/S01";
import Section02 from "templates/dataIT/S02";

const DataPageTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <Section02 content={templateProps.services} />
    </>
  );
};

export default DataPageTemplate;
