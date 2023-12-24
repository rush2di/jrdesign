import { useState } from "react";
import ModalWrapper from "../Wrapper";

const PackagesModal = () => {
  return (
    <ModalWrapper isOpen={isModalOpen} handleClose={handleClose}>
      <p>Modal</p>
    </ModalWrapper>
  );
};

export default PackagesModal;
