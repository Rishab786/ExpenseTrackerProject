const expenseDb = require("../models/expenses");
exports.getAllExpenses = async (req, res, next) => {
  const result = await expenseDb.getAllExpenses();
  res.send(result);
};
