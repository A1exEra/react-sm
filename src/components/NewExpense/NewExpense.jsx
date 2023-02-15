import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `${Math.floor(Math.random() * 100) + 1}`,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [isEditing, setIsEditing] = useState(false);
  const onEditingHandler = () => {
    setIsEditing((prevVal) => !prevVal);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={onEditingHandler}>
          ADD NEW EXPENSE
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          isEditingHandler={onEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
