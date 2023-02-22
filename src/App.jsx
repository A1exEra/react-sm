import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import User from "./components/User/User";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
const App = () => {
  const USERS = [
    { name: "John", age: "34", id: 34 },
    { name: "Jade", age: "36", id: 56 },
  ];
  const [isModal, setIsModal] = useState(false);
  const [users, setUsers] = useState(USERS);
  const addNewUserHandler = (user) => {
    // USERS.unshift(user);
    setUsers((prevState) => [user, ...prevState]);
  };
  const oncloseModalHandler = (closeModal) => {
    setIsModal(closeModal);
  };
  return (
    <div className="App">
      <h1>Jacked Up And Good To Go</h1>
      <UserForm AddNewUser={addNewUserHandler} isModal={oncloseModalHandler} />
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {isModal && <Modal isModal={oncloseModalHandler} />}
    </div>
  );
};

export default App;
