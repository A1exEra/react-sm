import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import expensesData from "./expenses";

const App = () => {
  const addExpenseHandler = (expense) => {
    expensesData.unshift(expense);
    // console.log(expensesData);
  };
  return (
    <div className="container">
      <h1>Jacked Up And Good To Go</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesData} />
    </div>
  );
};

export default App;
