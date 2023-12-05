const expenseDb = require("../models/expenses");
exports.deleteExpense = async (req, res, next) => {
  const url = req.url;
  const id = url.substring(url.lastIndexOf("/") + 1);

  await expenseDb.delExpense(id);
};
