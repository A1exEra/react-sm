import "./App.css";
import UserForm from "./components/UserForm/UserForm";
const App = () => {
  const USERS = [];
  const addNewUserHandler = (user) => {
    USERS.push(user);
    console.log(USERS);
  };
  return (
    <div className="App">
      <h1>Jacked Up And Good To Go</h1>
      <UserForm AddNewUser={addNewUserHandler} />
    </div>
  );
};

export default App;
