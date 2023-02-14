import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  return (
    <div className="container">
      <h1>Jacked Up And Good To Go</h1>
      <Expenses />
    </div>
  );
};

export default App;
