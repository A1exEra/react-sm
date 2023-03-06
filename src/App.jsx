import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Users from "./components/Users/Users";
const App = () => {
  const USERS = [
    { name: "John", age: "34", id: 34 },
    { name: "Jade", age: "36", id: 56 },
  ];
  const [isModal, setIsModal] = useState(false);
  const [users, setUsers] = useState(USERS);
  const [modalMessage, setModalMessage] = useState({ title: "", message: "" });
  const addNewUserHandler = (user) => {
    // USERS.unshift(user);
    setUsers((prevState) => [user, ...prevState]);
  };
  const oncloseModalHandler = (closeModal) => {
    setIsModal(closeModal);
  };
  const errorMessage = (errorMessage) => {
    setModalMessage(errorMessage);
    console.log(errorMessage);
    console.log(modalMessage);
  };
  return (
    <>
      <h1>Jacked Up And Good To Go</h1>
      <UserForm
        AddNewUser={addNewUserHandler}
        isModal={oncloseModalHandler}
        message={errorMessage}
      />
      <Users users={users} />
      {isModal && (
        <Modal isModal={oncloseModalHandler} message={modalMessage} />
      )}
    </>
  );
};

export default App;
