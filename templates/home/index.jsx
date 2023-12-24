import Section01 from "./S01";
import Section02 from "./S02";
import Section03 from "./S03";
import Section04 from "./S04";
import Section05 from "./S05";
import Section06 from "./S06";

const HomeTemplate = ({ templateProps }) => {
  return (
    <>
      <Section01 />
      <Section02 covers={templateProps.covers} />
      <Section03 illustrations={templateProps.illustrations} />
      <Section04 data={templateProps.data} />
      <Section05 />
      <Section06 />
    </>
  );
};

export default HomeTemplate;
