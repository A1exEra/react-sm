import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  //create a maximum date dynamically
  const date = new Date();
  const getDate = (date) =>
    `${date.getDate()}`.length < 2 ? "0" + date.getDate() : date.getDate();
  const getMonth = (month) =>
    `${month.getMonth()}`.length < 2
      ? `0${month.getMonth() + 1}`
      : month.getMonth() + 1;
  const currentDate = `${date.getFullYear()}-${getMonth(date)}-${getDate(
    date
  )}`;
  //
  const [data, setData] = useState({
    title: "enter your expense",
    amount: "0.1",
    date: `${currentDate}`,
  });
  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const amountChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };
  const dateChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };
    setData((prevVal) => ({
      title: "",
      amount: 0.1,
      date: currentDate,
    }));
    props.onSaveExpenseData(enteredData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={data.title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amout</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
            value={data.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={currentDate}
            onChange={dateChangeHandler}
            value={data.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.isEditingHandler}>
          CANCEL
        </button>
        <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
