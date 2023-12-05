const express = require("express");
const homeController = require("../controllers/homePage");
const router = express.Router();
router.get("/data", homeController.getAllExpenses);
module.exports = router;
