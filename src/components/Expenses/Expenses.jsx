import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    `${new Date().getFullYear()}`
  );
  // let filteredExpenses = props.expenses.filter(
  //   (expense) => `${expense.date.getFullYear()}` === filteredYear
  // );
  // const [expenses, setExpenses] = useState(props.expenses);
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
    // const filteredExpenses = props.expenses.filter(
    //   (expense) => `${expense.date.getFullYear()}` === year
    // );
    // setExpenses(filteredExpenses);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => `${expense.date.getFullYear()}` === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={filteredYearHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
