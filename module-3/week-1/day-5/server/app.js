require("dotenv").config();
require("./config/dbConnection");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to the backend !" });
});

app.use("/plants", require("./routes/plant"));

app.use("*", (req, res, next) => {
  res
    .status(404)
    .json({ message: "The ressource you're trying to access does not exist" });
});

module.exports = app;
