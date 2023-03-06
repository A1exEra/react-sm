import styles from "./UserForm.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const UserForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });
  const [errorMessage, seterrorMessage] = useState({ title: "", message: "" });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userInput.name.trim().length < 1 || userInput.age.trim().length < 1) {
      setIsValid(false);
      props.isModal(true);
      seterrorMessage({
        title: "Invalid Input!",
        message: "Enter a valid user name and age.",
      });
      props.message(errorMessage);
      return;
    }
    const userId = () => Math.floor(Math.random() * 100) + 1;
    props.AddNewUser({ ...userInput, id: userId() });
    console.log(userInput);
    setUserInput({ name: "", age: "" });
  };
  const UserNameChangeHandler = (event) => {
    if (event.target.value.trim().length < 1) {
      setIsValid((prevVal) => !prevVal);
      return;
    }
    setIsValid(true);
    setUserInput((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const UserAgeChangeHandler = (event) => {
    if (event.target.value.trim().length < 1) {
      setIsValid((prevVal) => !prevVal);
      return;
    }
    setIsValid(true);
    setUserInput((prevState) => ({ ...prevState, age: event.target.value }));
  };
  return (
    <Card className={`${styles["user-form"]}`}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">User name:</label>
        <input
          id="usernmae"
          className={`${!isValid && styles.invalid}`}
          type="text"
          name="userName"
          onChange={UserNameChangeHandler}
          value={userInput.name}
        />
        <label htmlFor="userage">User age:</label>
        <input
          id="userage"
          className={`${!isValid && styles.invalid}`}
          type="number"
          min="18"
          max="50"
          name="userAge"
          onChange={UserAgeChangeHandler}
          value={userInput.age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default UserForm;
