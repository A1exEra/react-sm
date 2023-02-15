import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const expense = props.expense;
  const [title, setTitle] = useState(expense.title);
  const clickHandler = () => {
    setTitle("this title was chenged!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <p>{title}</p>
        <div className="expense-item__price">£{expense.amount}</div>
        <button className="btn btn-secondary" onClick={clickHandler}>
          Change title
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
