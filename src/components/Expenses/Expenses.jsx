import ExpenseItem from "./ExpenseItem";
// import expensesData from "../../expenses";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    `${new Date().getFullYear()}`
  );
  // const [expenses, setExpenses] = useState(props.expenses);
  // console.log(props.expenses);
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
    console.log(`Selected year stored in a state - ${year}`);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={filteredYearHandler}
        filteredYear={filteredYear}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};
export default Expenses;
