import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const AllExpenses = (props) => {
  const { allExpenses, setAllExpenses } = props;
  const [deletedExpense, setDeletedExpense] = useState(0);
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/expense")
      .then((res) => {
        // console.log(res.data);
        setAllExpenses(res.data);
      })
      .catch((err) => {
        console.log("Error getting allExpenses in component level", err);
      });
  }, [deletedExpense]);

  const deleteExpense = (id_form) => {
    axios
      .post(`http://localhost:8000/expense/${id_form}`)
      .then((res) => {
        setDeletedExpense(id_form);
        console.log(deletedExpense);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Title>This is the all expenses component</Title>
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
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Created date</th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.expenseType}</td>
                <td>{expense.createdAt}</td>
                <td>{expense._id}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteExpense(expense._id);
                    }}
                    type="submit"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default AllExpenses;

const Title = styled.div`
  font-family: sans-serif;
`;
