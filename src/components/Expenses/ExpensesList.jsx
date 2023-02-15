import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">NO EXPENSES FOUND</h2>;
  }
  return (
    <ul className="expenses-list">
      <li>
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </li>
    </ul>
  );
};
export default ExpensesList;
