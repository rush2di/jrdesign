import emailjs from "emailjs-com";

import OfferForm from "components/Forms/OfferForm";
import { errorNotification, successNotification } from "utils/helpers";
import { STEP_1_OPTIONS, STEP_2_OPTIONS, STEP_3_OPTIONS } from "./constants";
import { useSteps } from "react-step-builder";

const Section02 = () => {
  const { jump } = useSteps();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const payload = {
      email: values.email,
      name: values.name,
      message: values.message,
      type: "Offer",
      service: "",
      phone: values.phone,
      projectType: values.projectType,
      projectBudget: values.projectBudget,
      projectOutset: values.projectOutset,
    };

    console.log({payload})

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
        jump(1);
      });
  };

  return (
    <div className="py-5 bg-light relative">
      <div className="container">
        <div className="row">
          <div className="col-5 col-md-7 col-sm-10 col-xsm-12 mx-auto">
            <div className="bg-light">
              <OfferForm
                options={[STEP_1_OPTIONS, STEP_2_OPTIONS, STEP_3_OPTIONS]}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
