const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add expense name"],
      minlength: [3, "Name must be at least 3 characters"],
    },
    expenseType: {
      type: String,
      required: [true, "Add type of expense"],
      minlength: [3, "Type must be at least 3 characters"],
    },
    amount: {
      type: Number,
      required: [true, "Add an amount"],
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
