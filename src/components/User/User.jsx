import styles from "./User.module.css";
// import { useState } from "react";
// import Card from "../Card/Card";
const Users = (props) => {
  return (
    <div className={styles.card}>
      <p>
        {props.user.name}, {props.user.age}
      </p>
    </div>
  );
};
export default Users;
