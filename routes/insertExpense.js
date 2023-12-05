const express = require("express");
const insertController = require("../controllers/insertExpense");
const router = express.Router();
router.post("/add", insertController.postExpense);
module.exports = router;
