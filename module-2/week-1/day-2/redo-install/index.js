const express = require("express");
const app = express();
const hbs = require("hbs");

// base config
// https://expressjs.com/fr/starter/static-files.html
// file available for the browser (frontend files)
app.use(express.static(__dirname + "/public"));

// template config
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// routing
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/dynamic-test", (req, res) => {
  // res.render accepts a second parameter (object)
  // meant to send values to the template
  const tplData = {
    title: "Dynamic view tests",
    theResponse: 42,
    hobbies: ["foo", "bar", "baz", "nil"],
    loveJS: false,
    userInfos: {
      name: "Bill",
      age: 40,
      email: "bill@mail.com",
    },
  };

  res.render("dynamicTest", tplData);
  //   same as passing the object directly to the view ...
  //   res.render("dynamicTest", {});
});

app.get("/users", (req, res) => {
  res.json(["jill", "bill", "will"]);
});

// app (simple) kickstart
app.listen(8000, () => console.log("started at http://localhost:8000"));
