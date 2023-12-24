import { useEffect } from "react";
import { joinClassNames } from "utils/helpers";
import styles from "./styles.module.scss";

const {
  modalWrapper,
  modalWrapper__child,
  modalWrapper__isOpen,
  modalWrapper__trigger,
  modalWrapper__isClosed,
} = styles;

const ModalWrapper = ({ children, isOpen = false, handleClick }) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (isOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "initial";
    }
  }, [isOpen]);

  const modalStyles = isOpen
    ? joinClassNames([modalWrapper, modalWrapper__isOpen])
    : joinClassNames([modalWrapper, modalWrapper__isClosed]);

  return (
    <div className={modalStyles}>
      <div onClick={handleClick}></div>
      <div className="d-flex align-center justify-center">
        <div onClick={handleClick} className={modalWrapper__trigger}></div>
        <div onClick={handleClick} className={modalWrapper__trigger}></div>
        <div className={modalWrapper__child}>{children}</div>
        <div onClick={handleClick} className={modalWrapper__trigger}></div>
        <div onClick={handleClick} className={modalWrapper__trigger}></div>
      </div>
    </div>
  );
};

export default ModalWrapper;
