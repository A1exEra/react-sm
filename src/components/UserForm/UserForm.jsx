import "./UserForm.css";
import { useState } from "react";

const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: null,
    age: null,
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(userInput);
    props.AddNewUser(userInput);
  };
  const UserNameChangeHandler = (event) => {
    // console.log(event.target.value);
    setUserInput((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const UserAgeChangeHandler = (event) => {
    // console.log(event.target.value);
    setUserInput((prevState) => ({ ...prevState, age: event.target.value }));
  };
  return (
    <form className="user-form" onSubmit={onSubmitHandler}>
      <label>User name:</label>
      <input type="text" name="userName" onChange={UserNameChangeHandler} />
      <label>User age:</label>
      <input
        type="number"
        min="18"
        max="50"
        name="userAge"
        onChange={UserAgeChangeHandler}
      />
      <button>Add User</button>
    </form>
  );
};
export default UserForm;
