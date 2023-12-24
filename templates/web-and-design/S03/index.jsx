import { useState } from "react";
import { v4 as uuid } from "uuid";
import emailjs from "emailjs-com";

import { PackageForm } from "components/Forms";
import { errorNotification, successNotification } from "utils/helpers";
import ModalWrapper from "components/Modals/Wrapper";
import PackageCard from "components/PackageCard";

const _TITLE_BG_COLORS = ["#03a84e", "#068a42", "#04592b"];

const Section03 = ({ packages }) => {
  const [userPackage, setUserPackage] = useState({
    isModelOpen: false,
    packageTitle: null,
  });

  const handleClose = (e) => {
    e.stopPropagation();
    setUserPackage({ isModelOpen: false, packageTitle: null });
  };

  const handleOpen = (e, packageTitle) => {
    e.stopPropagation();
    setUserPackage({ isModelOpen: true, packageTitle });
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const payload = { ...values, package: userPackage.packageTitle };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_PACKAGE_TEMPLATE_ID,
        payload
      )
      .then(() => successNotification())
      .catch(() => errorNotification())
      .finally(() => {
        resetForm();
        setSubmitting(false);
        setUserPackage({ isModelOpen: false, packageTitle: null });
      });
  };

  return (
    <div className="packages_grid">
      <div className="container">
        <div className="py-5 py-sm-0">
          <div className="row mb-3">
            <div className="col-12 col-md-9 col-sm-12">
              <h2 className="heading3 mb-0">Sjekk ut våre rimelige pakker</h2>
            </div>
            <div className="col-6 col-md-12 mt-1">
              <p className="paragraph">
                Sjekk ut våre pakker oppført nedenfor. Disse prisene har en
                fastpris og vi tar ikke ekstra betalt for små endringer eller
                tilpasninger på nettsiden. Vennligst sjekk hver pakke og velg
                den som passer for dine behov. Trenger du hjelp til å velge,
                ikke nøl med å kontakte oss via e-post eller telefon.
              </p>
            </div>
          </div>
          <ul className="row">
            {packages.map((item, index) => (
              <li key={uuid()} className="col-4 col-lg-6 col-sm-12">
                <PackageCard
                  bg={_TITLE_BG_COLORS[index]}
                  isDark={index == 1}
                  title={item.title}
                  text={item.description}
                  price={item.price}
                  list={item.services}
                  btnText="BESTILL NÅ"
                  onClick={handleOpen}
                />
              </li>
            ))}
          </ul>
          <ModalWrapper
            isOpen={userPackage.isModelOpen}
            handleClick={handleClose}
          >
            <PackageForm onSubmit={handleSubmit} />
          </ModalWrapper>
        </div>
      </div>
    </div>
  );
};

export default Section03;
