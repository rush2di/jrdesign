import { _ACTIVE_CLASSNAME, _ERROR_CLASSNAME } from "./constants";

export const applyStylesFilter = (error, touched) => {
  let classNames = { active: "", error: "", active: "" };

  if (!!touched && error) {
    classNames = { ...classNames, error: _ERROR_CLASSNAME };
  } else {
    classNames = { ...classNames, error: "" };
  }
  if (!!touched) {
    classNames = { ...classNames, active: _ACTIVE_CLASSNAME };
  } else {
    classNames = { ...classNames, active: "" };
  }

  return Object.values(classNames).join(" ");
};
