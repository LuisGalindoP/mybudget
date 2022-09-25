import React, { useState } from "react";

import AllExpenses from "./components/allExpenses";
import Stats from "./components/stats";

function App() {
  const [allExpenses, setAllExpenses] = useState([]);
  return (
    <div>
      <AllExpenses allExpenses={allExpenses} setAllExpenses={setAllExpenses} />
      <Stats allExpenses={allExpenses} />
    </div>
  );
}

export default App;
