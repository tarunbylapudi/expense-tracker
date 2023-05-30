import ExpenseItem from "./ExpenseItem";
import "./css/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found!</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem expense={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
