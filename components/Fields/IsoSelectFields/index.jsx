import { useField } from "formik";
import { useEffect, useState } from "react";
import { joinClassNames } from "utils/helpers";
import { v4 as uuidv4 } from "uuid";

import FieldWrapper from "../FieldWrapper";
import styles from "./styles.module.scss";

const { isoSelect__hidden, isoSelect__option, isoSelect__option_selected } =
  styles;

const IsoSelectFields = ({
  options,
  progress,
  handleNext,
  handlePrev,
  isMulti = false,
  ...props
}) => {
  const [field, meta, { setValue }] = useField(props);
  const [state, setState] = useState(
    options.map((item) => ({ text: item, isSelected: false }))
  );

  const handleSelect = (e) => {
    e.stopPropagation();
    const targetID = parseInt(e.target.id);
    const newState = state.map((option, index) => {
      if (index === targetID) {
        return { ...option, isSelected: !option.isSelected };
      }
      return isMulti === false ? { ...option, isSelected: false } : option;
    });
    const toFormikValue = newState
      .filter((opt) => opt.isSelected)
      .map((opt) => opt.text)
      .join(", ");
    setState(newState);
    setValue(toFormikValue);
  };

  useEffect(() => {
    let subscriberd = true;

    if (!!field.value && subscriberd) {
      const values = field.value.split(", ");
      const newState = state.map((obj) => {
        if (values.includes(obj.text)) return { ...obj, isSelected: true };
        return obj;
      });
      setState(newState);
    }

    return () => {
      subscriberd = false;
    };
  }, []);

  return (
    <>
      <div className={isoSelect__hidden}>
        <FieldWrapper meta={meta} {...props}>
          <input
            aria-hidden
            className="text-input hidden"
            {...field}
            {...props}
          />
        </FieldWrapper>
      </div>
      <ul>
        {state.map(({ text, isSelected }, id) => {
          return (
            <li key={uuidv4()}>
              <IsoSelectOption {...{ id, text, isSelected, handleSelect }} />
            </li>
          );
        })}
      </ul>
      <div className="d-flex align-center justify-between mt-2">
        <button
          onClick={handlePrev}
          disabled={progress === 0}
          className={joinClassNames([
            "btn w-fit txt-underline",
            progress === 0 ? "v-hidden" : "btn--outline-comp color-main",
          ])}
        >
          Forrige
        </button>
        <button
          onClick={handleNext}
          disabled={field.value === ""}
          className={joinClassNames([
            "btn w-fit",
            field.value === ""
              ? "btn--bg-light color-muted"
              : "btn--bg-success",
          ])}
        >
          Neste
        </button>
      </div>
    </>
  );
};

const IsoSelectOption = ({ isSelected, text, id, handleSelect }) => {
  return (
    <div
      id={id}
      onClick={handleSelect}
      className={joinClassNames([
        isoSelect__option,
        isSelected ? isoSelect__option_selected : "",
      ])}
    >
      <div>&#10004;&#xFE0E;</div>
      <div>{text}</div>
    </div>
  );
};

export default IsoSelectFields;
