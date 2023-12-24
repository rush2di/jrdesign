import Select from "react-select";
import { useField } from "formik";
import FieldWrapper from "../FieldWrapper";
import { transformFieldValue, transformStateValue } from "./utils";
import { v4 } from "uuid";

const SelectInput = ({ label, options, isMulti = false, ...props }) => {
  const _DEFAULT_OPTIONS = options.map((option) => ({
    label: option,
    value: option,
  }));

  const [field, meta, { setValue, setTouched }] = useField(props);

  const onChange = (choice) => {
    if (isMulti === true) {
      setValue(transformStateValue(choice));
    } else {
      setValue(choice.value);
    }
  };

  return (
    <FieldWrapper label={label} meta={meta} {...props}>
      <Select
        value={transformFieldValue(field.value)}
        options={_DEFAULT_OPTIONS}
        onChange={onChange}
        onBlur={setTouched}
        isMulti={isMulti}
        id={props.id}
        instanceId={props.id}
        {...props}
      />
    </FieldWrapper>
  );
};

export default SelectInput;
