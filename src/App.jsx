import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import expensesData from "./expenses";

function App() {
  return (
    <div className="container">
      <h1>Jacked Up And Good To Go</h1>
      {expensesData.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default App;
