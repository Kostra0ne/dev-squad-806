const express = require("express"); // require only works in node environment (server-side)
const hbs = require("hbs");
// require is the node way to import a resource
const app = express(); // https://expressjs.com/fr/4x/api.html

// BASIC CONFIGURATION
// static assest is a complicated word to say :
// those are downloadable by any browser without permission : FREE TO ACCESS
// MANDATORY LINE = MUST BE DEFINED BEFORE THE ROUTING
app.use(express.static(__dirname + "/public"));
// app.use() will be executed on each HTTP request ...

// TEMPLATE CONFIG (MANDATORY AS WELL)
// those lines tell express ...
app.set("views", __dirname + "/views"); // where are the views located ...
app.set("view engine", "hbs"); // and the templating engine that will "render" (generate) the views
// there are many other engines available (jade, pug, hbs, ejs...)

// below we tell hbs where it should look for views-partials
// partials are reusable pieces of html (nav, footer, buttons...)
// the idea is to make your app modular, and maybe reuse some partials in other applications :D
hbs.registerPartials(__dirname + "/views/partials");

// BASIC ROUTING
app.get("/", (req, res) => {
  // request and response are objects
  // one represents the incoming http request
  // the other represents the outcoming http response

  // res.send("<h1>home !!!</h1><p>that is kind of tedious to write inlined HTML like that... <br>There must be a better way !!!!</p>");

  //   res.sendFile(__dirname + "/views/home.html");
  res.render("home", {
    pageTitle: "Homepage",
    isMonday: false,
    blogPosts: [
      {
        title: "JS Rocks",
        text: "lorem ipsum",
      },
      {
        title: "Be kind with Javaists, they are suffering",
        text: "JS really rocks",
      },
    ],
    htmlAsAVariable: "<p>foo</foo><h2>toto</h2>",
  });
  // use the templating engine to generate the returned view
  // that's the technique we'll use during module 2 !!!
});

app.get("/about", function (request, response) {
  //   response.send(
  //     "i'm about page ! fun facts : HTTP stands for Hypertext Transfer Protocol"
  //   );
  //   response.sendFile(__dirname + "/views/about.html");
  response.render("about", {
    pageTitle: "About my awesome company",
  });
  // .. so we should be able to send HTML over the wire !
});

app.get("/contact", function (request, response) {
  //   response.send("im contact page !");
  //   response.sendFile(__dirname + "/views/contact.html");
  response.render("contact", {
    pageTitle: "Contact us",
  });
});

app.get("/users", function (request, response) {
  // you can respond text, html, json,  binary streams ...
  response.json([{ name: "bill" }, { name: "jill" }, { name: "will" }]);
});

// for a given request, if none of the previous routes is a match, the route below will output a default 404 (not found) response
app.get("*", function (request, response) {
  response.send("not found, sorry");
});

// that's the basic config
// it will change a little bit soon (we well export the app to make the error management easier ...)
/// more coming ;)
app.listen(3000, () => {
  // localhost is a.k.a 127.0.0.1
  // when developing localy, your computer has 2 roles : client AND server
  console.log("server is running @ http://localhost:3000");
});
