import React, { useState } from "react";

import AddExpenses from "./components/addExpense";
import AllExpenses from "./components/allExpenses";

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  return (
    <div>
      <AddExpenses />
      <AllExpenses allExpenses={allExpenses} setAllExpenses={setAllExpenses} />
    </div>
  );
}

export default App;
