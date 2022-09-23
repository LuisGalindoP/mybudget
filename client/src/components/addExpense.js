import React, { useEffect, useState } from "react";
import axios from "axios";
import { link, navigate } from "@reach/router";

const AddExpenses = (props) => {
  const { allExpenses, setAllExpenses } = props;
  const [name, setName] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const formhandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/expense/new", {
        name,
        expenseType,
        amount,
      })
      .then((res) => {
        // console.log(res.data);
        setAllExpenses([...allExpenses, res.data]);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setErrors(err.response.data.err);
      });
  };
  return (
    <div>
      <h1>This is the add an expense component</h1>
      {/* FORM STARTS HERE */}
      {/* FORM NAME */}
      <form onSubmit={formhandler}>
        <label>Expense name</label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
        />
        {/* FORM EXPENSE TYPE */}
        <label>Type</label>
        <input
          onChange={(event) => {
            setExpenseType(event.target.value);
          }}
          type="text"
        />
        <label>amount</label>
        <input
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          type="number"
        />
        <button type="submit">Add Expense</button>
      </form>
      <hr />
    </div>
  );
};

export default AddExpenses;
