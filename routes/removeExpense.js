const express = require("express");
const removeController = require("../controllers/removeExpense");
const router = express.Router();
router.delete("/delete/:id", removeController.deleteExpense);
module.exports = router;
