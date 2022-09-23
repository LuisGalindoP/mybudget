const ExpenseController = require("../controllers/expense.controller");

module.exports = (app) => {
  app.get("/expense", ExpenseController.findAllExpenses);
  app.post("/expense/new", ExpenseController.addNewExpense);
  // app.get("/expense/:id", ExpenseController.findOneExpense);
  // app.put("/expense/:id/edit", ExpenseController.updateExpense);
  app.post("/expense/:id", ExpenseController.removeExpense);
};
