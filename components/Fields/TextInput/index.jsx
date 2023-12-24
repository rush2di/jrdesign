import { useField } from "formik";
import FieldWrapper from "../FieldWrapper";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FieldWrapper label={label} meta={meta} {...props}>
      <input className="text-input" {...field} {...props} />
    </FieldWrapper>
  );
};

export default TextInput;
