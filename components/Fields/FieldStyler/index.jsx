import { applyStylesFilter } from "./utils";

const FieldStyler = ({ meta, children }) => {
  const stateClassNames = applyStylesFilter(meta.error, meta.touched);

  return <div className={stateClassNames}>{children}</div>;
};

export default FieldStyler;
