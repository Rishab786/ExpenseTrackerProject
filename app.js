const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const homePageRouter = require("./routes/homePage");
const insertExpenseRouter = require("./routes/insertExpense");
const deleteExpenseRouter = require("./routes/removeExpense");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/data", homePageRouter);
app.post("/add", insertExpenseRouter);
app.delete("/delete/:id", deleteExpenseRouter);
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(3000, () => {
  console.log("server started");
});
