import { useFormik } from "formik";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com";
import * as Yup from "yup";

const Select = dynamic(() => import("react-select"), { ssr: false });

import {
  initInputStyles,
  successNotification,
  errorNotification,
} from "utils/helpers/";

/**
 * ContactForm:
 *  > renders the contact form & uses Formik to
 *    handle form events
 */
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("nødvendig"),
      email: Yup.string().email().required("nødvendig"),
      service: Yup.object(),
      message: Yup.string().min(3, "for kort").required("nødvendig"),
    }),
    onSubmit: (
      { name, email, service: { value }, message },
      { setSubmitting, resetForm }
    ) => {
      const payload = {
        email,
        name,
        service: value,
        message,
        type: "Contact",
        phone: "",
        projectType: "",
        projectBudget: "",
        projectOutset: "",
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          payload
        )
        .then(() => successNotification())
        .catch(() => errorNotification())
        .finally(() => {
          resetForm();
          setSubmitting(false);
        });
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
  } = formik;

  const isDIRTY = errors.name || errors.email || errors.message ? true : false;

  const nameStyles = initInputStyles("name", errors, touched, values);
  const emailStyles = initInputStyles("email", errors, touched, values);
  const serviceStyles = initInputStyles("service", errors, touched, values);
  const messageStyles = initInputStyles("message", errors, touched, values);

  return (
    <form
      onSubmit={handleSubmit}
      className="section__formWrapper"
      name="contact"
    >
      <div className="field flex-column">
        <label className={nameStyles.activeLabel} htmlFor="name">
          Navn
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className={nameStyles.activeField + " " + nameStyles.errorField}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        <div className="notification">
          <p>{formik.touched.name && formik.errors.name && "nødvendig"}</p>
        </div>
      </div>
      <div className="field flex-column">
        <label className={emailStyles.activeLabel} htmlFor="email">
          E-post
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className={emailStyles.activeField + " " + emailStyles.errorField}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        <div className="notification">
          <p>{formik.touched.email && formik.errors.email && "nødvendig"}</p>
        </div>
      </div>
      <div className="field flex-column">
        <label className={serviceStyles.activeLabel} htmlFor="service">
          Emne
        </label>
        <EnhancedSelect
          id="select"
          onChange={setFieldValue}
          value={formik.values.service}
          onBlur={setFieldTouched}
        />
      </div>
      <div className="field flex-column">
        <label className={messageStyles.activeLabel} htmlFor="email">
          Melding
        </label>
        <textarea
          id="message"
          type="text"
          name="message"
          className={messageStyles.activeField + " " + messageStyles.errorField}
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        />
        <div className="notification">
          <p>
            {formik.touched.message && formik.errors.message ? "nødvendig" : ""}
          </p>
        </div>
      </div>
      <button disabled={isDIRTY} type="submit" className="btn btn__prim">
        {isSubmitting ? "Laster..." : "Send"}
      </button>
    </form>
  );
};

/**
 * EnhacedSelect:
 *  > renders a costum select form field
 */
const EnhancedSelect = (props) => {
  const options = [
    { value: "Generelle spørsmål", label: "Generelle spørsmål" },
    { value: "Wordpress Nettside", label: "Wordpress Nettside" },
    { value: "Mer avansert nettside", label: "Mer avansert nettside" },
    { value: "Nettbutikk", label: "Nettbutikk" },
    { value: "Design", label: "Design" },
  ];

  const handleChange = (value) => {
    props.onChange("service", value);
  };

  const handleBlur = () => {
    props.onBlur("service", true);
  };

  return (
    <Select
      id={props.id}
      name="service"
      options={options}
      isMulti={false}
      value={props.value}
      onBlur={handleBlur}
      onChange={handleChange}
      className="select__container"
      classNamePrefix="select"
      placeholder="VELG"
    />
  );
};

export default ContactForm;
