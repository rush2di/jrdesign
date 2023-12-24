const transformStateValue = (stateVal) => {
  return stateVal.map((item) => item.value);
};

const transformFieldValue = (fieldVal) => {
  let newFieldVal = [];

  if (typeof fieldVal === "string") {
    return fieldVal !== "" ? { label: fieldVal, value: fieldVal } : null;
  } else {
    fieldVal.forEach((item) => {
      if (item !== "") newFieldVal.push({ label: item, value: item });
    });
    return newFieldVal;
  }
};

export { transformStateValue, transformFieldValue };
