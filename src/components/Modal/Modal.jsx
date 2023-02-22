import styles from "./Modal.module.css";

const Modal = (props) => {
  const onClickHandler = () => {
    props.isModal(false);
  };
  return (
    <div className={styles["modal-background"]}>
      <div className={styles.modal}>
        <p>Error!</p>
        <button onClick={onClickHandler}>Close</button>
      </div>
    </div>
  );
};
export default Modal;
