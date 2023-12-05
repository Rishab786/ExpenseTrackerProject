const expenseDb = require("../models/expenses");
exports.postExpense = async (req, res, next) => {
  const price = req.body.Amount;
  const product = req.body.Description;
  const category = req.body.Category;
  const id = req.body.Id;
  
  const result = await expenseDb.addExpense(price, product, category, id);
  res.send(result);
};
