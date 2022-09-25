import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, navigate } from "@reach/router";

import Categories from "../data/categories";

const AllExpenses = (props) => {
  const { allExpenses, setAllExpenses } = props;
  const [deletedExpense, setDeletedExpense] = useState(0);
  const [description, setDescription] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const formhandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/expense/new", {
        description,
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
        {/* FORM EXPENSE TYPE */}
        <select
          className={"shadow border rounded py-1 w-1/2 text-gray-600"}
          onChange={(event) => {
            setExpenseType(event.target.value);
          }}
        >
          <option value="none" defaultValue hidden>
            Select a type
          </option>
          {Categories.map((cat, index) => {
            return (
              <option value={cat} key={index}>
                {cat}
              </option>
            );
          })}
        </select>
        <label>amount</label>
        <input
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          type="number"
        />
        <label>Description</label>
        <input
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="text"
        />
        <button type="submit">Add Expense</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            {/* <th>Created date</th> */}
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.expenseType}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                {/* <td>{expense.createdAt}</td>
                <td>{expense._id}</td> */}
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
