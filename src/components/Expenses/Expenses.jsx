import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    `${new Date().getFullYear()}`
  );
  let filteredExpenses = props.expenses.filter(
    (expense) => `${expense.date.getFullYear()}` === filteredYear
  );
  const [expenses, setExpenses] = useState(props.expenses);
  console.log(expenses);
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
    // const filteredExpenses = props.expenses.filter(
    //   (expense) => `${expense.date.getFullYear()}` === year
    // );
    filteredExpenses = props.expenses.filter(
      (expense) => `${expense.date.getFullYear()}` === year
    );
    setExpenses(filteredExpenses);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={filteredYearHandler}
        filteredYear={filteredYear}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};
export default Expenses;
