import { Steps, useSteps } from "react-step-builder";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  TextAreaInput,
  TextInput,
  PhoneInput,
  IsoSelectField,
} from "components/Fields";
import { joinClassNames } from "utils/helpers";
import styles from "./styles.module.scss";

const { offerForm__contact, offerForm__progress } = styles;

const OfferForm = ({ onSubmit, options }) => {
  const { prev, next, progress } = useSteps();

  const initialValues = {
    projectType: "",
    projectBudget: "",
    projectOutset: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    projectType: Yup.string().required("nødvendig"),
    projectBudget: Yup.string().required("nødvendig"),
    projectOutset: Yup.string().required("nødvendig"),
    name: Yup.string().required("nødvendig"),
    email: Yup.string().email("ugyldig epost").required("nødvendig"),
    phone: Yup.string()
      .min(6, "telefonnummeret er for kort")
      .max(19, "telefonnummeret er for langt")
      .required("nødvendig"),
    message: Yup.string()
      .min(10, "meldingen er for kort")
      .required("nødvendig"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, errors, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <Steps>
            <div className="step">
              <h2 className="font-weight-bold txt-center txt-h4">
                Hva skal gjøres?
              </h2>
              <div className="mt-1-75 flex flex-col">
                <IsoSelectField
                  isMulti
                  name="projectType"
                  label="project-type"
                  options={options[0]}
                  progress={progress}
                  handleNext={next}
                  handlePrev={prev}
                />
              </div>
            </div>
            <div className="step">
              <h2 className="font-weight-bold txt-center txt-h4">
                Omtrent hvor stort budsjett har du?
              </h2>
              <div className="mt-1-75 flex flex-col">
                <IsoSelectField
                  name="projectBudget"
                  label="project-budget"
                  options={options[1]}
                  progress={progress}
                  handleNext={next}
                  handlePrev={prev}
                />
              </div>
            </div>
            <div className="step">
              <h2 className="font-weight-bold txt-center txt-h4">
                Når ønsker du å starte prosjektet?
              </h2>
              <div className="mt-1-75 flex flex-col">
                <IsoSelectField
                  name="projectOutset"
                  label="project-outset"
                  options={options[2]}
                  progress={progress}
                  handleNext={next}
                  handlePrev={prev}
                />
              </div>
            </div>
            <div className={joinClassNames(["step", offerForm__contact])}>
              <div className="mb-1 w-100">
                <TextInput
                  label="Kontaktperson"
                  name="name"
                  type="text"
                  placeholder="Skriv her..."
                  styled="true"
                />
              </div>
              <div className="mb-2 w-100">
                <TextInput
                  label="E-post"
                  name="email"
                  type="email"
                  placeholder="Skriv her..."
                  styled="true"
                />
              </div>
              <div className="mb-2 w-100">
                <PhoneInput
                  label="Telefon"
                  name="phone"
                  type="tel"
                  placeholder="Skriv her..."
                  styled="true"
                />
              </div>
              <div className="mb-1 w-100">
                <TextAreaInput
                  label="Detaljene"
                  name="message"
                  placeholder="Skriv her..."
                  styled="true"
                />
              </div>
              <div className="d-flex align-center justify-between">
                <button
                  onClick={prev}
                  className={joinClassNames([
                    "btn w-fit txt-underline",
                    progress === 0
                      ? "v-hidden"
                      : "btn--outline-comp color-main",
                  ])}
                >
                  Forrige
                </button>
                <button
                  disabled={
                    errors.name ||
                    errors.email ||
                    errors.message ||
                    errors.phone
                      ? true
                      : false
                  }
                  className={joinClassNames([
                    "btn w-fit",
                    errors.name ||
                    errors.email ||
                    errors.message ||
                    errors.phone
                      ? "btn--bg-light color-muted"
                      : "btn--bg-success",
                  ])}
                  type="submit"
                >
                  {isSubmitting ? "Laster..." : "Send inn"}
                </button>
              </div>
            </div>
          </Steps>
          <div
            className={joinClassNames([offerForm__progress, "mt-2 txt-center"])}
          >
            <span className="font-weight-bold txt-md">{progress * 100}%</span>
            <div className="w-100">
              <div style={{ width: `${progress * 100}%` }}></div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default OfferForm;
