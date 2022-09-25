import React, { useState, useEffect } from "react";
import Categories from "../data/categories";

const Stats = (props) => {
  const { allExpenses } = props;
  let groceries = 0;
  for (let i = 0; i < allExpenses.length; i++) {
    if (allExpenses[i].expenseType === "groceries") {
      groceries = groceries + allExpenses[i].amount;
    }
  }
  return (
    <div>
      <h2>STATS</h2>
      <h3>Groceries total: {groceries}</h3>
    </div>
  );
};

export default Stats;
