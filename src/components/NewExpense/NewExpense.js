import { useState } from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpenseHandler(expenseData);
    setIsEditing(false)
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCalcelEditing={cancelEditingHandler} />}
    </div>
  );
};

export default NewExpense;
