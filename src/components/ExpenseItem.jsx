import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expense = props.expense;
  console.log(expense);
  //   const expenseDate = expense.date;
  //   const expenseTitle = expense.title;
  //   const expensePrice = expense.amount;
  //   const date = `${expenseDate.getDate()}.${expenseDate.getMonth()}.${expenseDate.getFullYear()}`;
  return (
    <div className="expense-item">
      <div>{expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <p>{expense.title}</p>
        <div className="expense-item__price">£{expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
