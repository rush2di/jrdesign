import { useField } from "formik";
import FieldWrapper from "../FieldWrapper";

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper label={label} meta={meta} {...props}>
      <textarea {...field} {...props} resize="none" />
    </FieldWrapper>
  );
};

export default TextAreaInput;
