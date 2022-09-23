import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AllExpenses = (props) => {
  const { allExpenses, setAllExpenses } = props;

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
  }, [allExpenses]);

  const deleteExpense = (id) => {
    axios
      .post(`http://localhost:8000/expense/${id}`)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Title>This is the all expenses component</Title>
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
