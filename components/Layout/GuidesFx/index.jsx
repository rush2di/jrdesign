import styles from "./styles.module.scss";

const { guides, guides__wrapper, guides__container, guides__guide } = styles;

const Guides = () => {
  return (
    <div className={guides__wrapper}>
      <div className={guides}>
        <div className={guides__container}>
          <div className={guides__guide} />
          <div className={guides__guide} />
          <div className={guides__guide} />
          <div className={guides__guide} />
          <div className={guides__guide} />
        </div>
      </div>
    </div>
  );
};

export default Guides;
