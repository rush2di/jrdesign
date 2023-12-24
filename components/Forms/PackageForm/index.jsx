import * as Yup from "yup";
import { Formik } from "formik";

import { TextAreaInput, TextInput, PhoneInput } from "components/Fields";

const PackageForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    details: "",
    package: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("nødvendig"),
    email: Yup.string().email("ugyldig epost").required("nødvendig"),
    phone: Yup.string()
      .min(6, "telefonnummeret er for kort")
      .max(19, "telefonnummeret er for langt")
      .required("nødvendig"),
    details: Yup.string()
      .min(10, "meldingen er for kort")
      .required("nødvendig"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="form form--bordered form--columns elevation-sm-1 bg-light px-1-75 py-2"
        >
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
          <div className="mb-1 w-100">
            <TextAreaInput
              label="Detaljene"
              name="details"
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
          <button
            disabled={
              errors.name || errors.email || errors.details || errors.phone
                ? true
                : false
            }
            className="btn btn--bg-dark w-100 max-w-100 txt-uppercase"
            type="submit"
          >
            {isSubmitting ? "Laster..." : "Send"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PackageForm;
