import { useField } from "formik";
import FieldWrapper from "../FieldWrapper";
import styles from "./styles.module.scss";

const { fileinput } = styles;

const FileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  if (props.type !== "file") {
    props.type = "file";
  }

  return (
    <FieldWrapper label={label} meta={meta} {...props}>
      <input className={fileinput} accept="image/*" {...field} {...props} />
    </FieldWrapper>
  );
};

export default FileInput;
