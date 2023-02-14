import ExpenseItem from "./ExpenseItem";
import expensesData from "../../expenses";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = () => {
  return (
    <Card className="expenses">
      {expensesData.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};
export default Expenses;
