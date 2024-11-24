require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const bookRouter = require("./router/book");
const userRouter = require("./router/users");

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch(() => console.log("Error Connecting to Database"));

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "./frontend")));
app.use(express.urlencoded({ extended: false }));

app.use("/books", bookRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "This is home route",
  });
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).json({
    message: message,
  });
});

app.listen(port, () => {
  console.log(`There server is running at ${port}`);
});
