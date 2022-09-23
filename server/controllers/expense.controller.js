const Expense = require("../models/expense.model");

module.exports = {
  //FIND ALL EXPENSES
  findAllExpenses: (req, res) => {
    Expense.find()
      .then((allExpenses) => {
        console.log(allExpenses);
        res.json(allExpenses);
      })
      .catch((err) => {
        console.log(`Error in findAllExpenses`);
        res.json({
          message: "Something went wrong in findAllExpenses",
          error: err,
        });
      });
  },
  //ADD A PET
  addNewExpense: (req, res) => {
    Expense.create(req.body)
      .then((newExpense) => {
        console.log(newExpense);
        res.json(newExpense);
      })
      .catch((err) => {
        console.log(`Error in addNewExpense ${err}`);
        res.status(400).json(err);
      });
  },
  //FIND ONE PET
  findOnePet: (req, res) => {
    Expense.findOne({ _id: req.params.id })
      .then((onExpense) => {
        console.log(oneExpense);
        res.json(oneExpense);
      })
      .catch((err) => {
        console.log("Error in findOneExpense");
        res.json({ message: "Error in findOneExpense", error: err });
      });
  },
  //UPDATE PET INFO
  updatePet: (req, res) => {
    Expense.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateExpense) => {
        console.log(updateExpense);
        res.json(updateExpense);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //REMOVE PET INFO
  removeExpense: (req, res) => {
    Expense.deleteOne({ _id: req.params.id })
      .then((removedExpense) => {
        console.log(removedExpense);
        res.json(removedExpense);
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "Error in removeExpense controller", error: err });
      });
  },
};
