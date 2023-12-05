const db = require("../utils/db");
async function saveExpense(price, product, category, id) {
  const result = await db.execute(
    "INSERT INTO expenses (price,product,category,id) VALUES (?, ?,?,?)",
    [price, product, category, id]
  );
}
async function getExpenses() {
  const result = await db.execute("SELECT * FROM `expenses`");
  return result[0];
}
async function deleteExpense(expenseId) {
  await db.execute("DELETE FROM expenses WHERE expenses.id = ?", [expenseId]);
}

module.exports = {
  addExpense: saveExpense,
  getAllExpenses: getExpenses,
  delExpense: deleteExpense,
};
