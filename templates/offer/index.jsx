import { StepsProvider } from "react-step-builder";

import Section01 from "./S01";
import Section02 from "./S02";
import Section03 from "./S03";
import Section04 from "./S04";

const OfferTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <StepsProvider>
        <Section02 />
      </StepsProvider>
      <Section03 />
      <Section04 reviewsData={templateProps.reviewsData} />
    </>
  );
};

export default OfferTemplate;
