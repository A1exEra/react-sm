import styles from "./Modal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
// import Wrapper from "../Helpers/Wrapper";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  <div className={styles.backdrop} onClick={props.onClickHandler}></div>;
};
const ErrorModal = (props) => {
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.message.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onClickHandler}>Close</Button>
    </footer>
  </Card>;
};
const Modal = (props) => {
  const onClickHandler = () => {
    props.isModal(false);
  };
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClickHandler={onClickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {/* {ReactDom.createPortal(
        <ErrorModal onClickHandler={onClickHandler} message={props.message} />,
        document.getElementById("modal-root")
      )} */}
    </Fragment>
  );
};
export default Modal;
