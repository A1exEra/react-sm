import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const expense = props.expense;
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <p>{expense.title}</p>
        <div className="expense-item__price">£{expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
