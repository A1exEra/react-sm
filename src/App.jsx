import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import expensesData from "./expenses";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(expensesData);
  const addExpenseHandler = (expense) => {
    // expensesData.unshift(expense);
    setExpenses((prevVal) => [expense, ...prevVal]);
  };
  return (
    <div className="container">
      <h1>Jacked Up And Good To Go</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
