require("dotenv").config();
require("./config/mongodb");
require("./helpers/hbs"); // custom functions adding features to hbs templates

// DEPENDENCIES
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const flash = require("connect-flash"); // designed to keep messages between 2 http request/response cycles
const session = require("express-session");

// INITAL CONFIG

// POST BODY PARSER
app.use(express.urlencoded({ extended: true })); // parse posted data
app.use(express.json()); // ajax ready

// TEMPLATING
app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
app.set("views", path.join(__dirname, "views")); // wahre are the pages ?
app.set("view engine", "hbs"); // which template engine
hbs.registerPartials(path.join(__dirname, "views/partials")); // where are the tiny chunks of views ?

// INITIALIZE SESSION
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
);

// FLASH MESSAGES
// enable "flash messaging" system
// it depends on the express-session mechanism
app.use(flash());

// CUSTOM MIDDLEWARES
// expose flash message to the hbs templates, if any flash-message is defined
app.use(require("./middlewares/exposeFlashMessage"));


/* expose login status to the hbs templates */

// let's set every user as admin for the inital dev phase
app.use(require("./middlewares/exposeLoginStatus"));


// BELOW => DEV MODE !!!!! TO AVOID LOGIN/LOGOUT INFERNO

// app.locals.isLoggedIn = true;
// app.locals.isAdmin = true;
// app.locals.currentUser = {
//   email: "foo@bar.baz",
//   avatar: "https://payload143.cargocollective.com/1/2/66133/5178589/url.gif"
// }



// ROUTING
app.use("/", require("./routes"));
app.use("/auth", require("./routes/auth"));
app.use("/albums", require("./routes/albums"));
app.use("/artists", require("./routes/artists"));
app.use("/labels", require("./routes/labels"));
app.use("/styles", require("./routes/styles"));

// export the app (check the import @ ./bin/www)
module.exports = app;
