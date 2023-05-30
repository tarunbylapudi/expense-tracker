import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterYear = (year) => {
    console.log(year);
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilterYear={changeFilterYear}
      />
      {props.items.map((item) => (
        <ExpenseItem expense={item} key={item.id}/>
      ))}
    </Card>
  );
};

export default Expenses;
