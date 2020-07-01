// below : extract the .env content + expose it in a node sytem object called process.env
// process.env is just an object where we store usefull infos
// process.env is private, don't push it on github !!!
require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();

// base config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.listen(process.env.PORT, function () {
  console.log(`My app is ready to rock @ http://localhost:${process.env.PORT}!`);
});
