import FieldStyler from "../FieldStyler";

const FieldWrapper = ({ label, meta, styled = false, ...props }) => {
  return (
    <>
      <label
        className="d-block font-weight-medium txt-md mb-0-50"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {!!styled ? (
        <FieldStyler meta={meta}>{props.children}</FieldStyler>
      ) : (
        props.children
      )}
      <div>
        {meta.touched && meta.error ? (
          <p className="color-danger txt-sm">nødvendig</p>
        ) : null}
      </div>
    </>
  );
};

export default FieldWrapper;
