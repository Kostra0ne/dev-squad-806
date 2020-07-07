const app = require("express")();
const fs = require("fs");

const session = {
    user: {
        role: "editor"
    }
};

function myFirstMiddleware(req, res, next) {
  // le rôle de next est de passer la main au prochain middleware
  // sinon si pas de middleware suivant, le callback final (le contrôleur) sera exécuté
  console.log("je suis myFirstMiddleware");
  next();
}

function middlewareModifyingTheRequest(req, res, next) {
  console.log("je suis middlewareModifyingTheRequest");
  req.laDateSaisie = Date.now();
  next();
}

function logger(req, res, next) {
  const log = `${req.ip} - ${req.method} - ${req.path} - ${
    req.protocol
  } - ${Date.now()}`;
  fs.appendFileSync("log.txt", log + "\n");
  next();
}

function myMiddleWithAParameter(value) {
  // ici on a une closure (fermeture lexicale : on utilise le scope parent pour conserver en mémoire une information, ici value)
  return function (req, res, next) {
    console.log("mais que se passe t'il ???", value);
    req.chose = value;
    next();
  };
}

function protectAdminRoute(req, res, next) {
    if (session && session.user && session.user.role === "admin") next();
    else res.redirect("/login");
}

// si tu utilises app.use(function) avec un middleware en argument...
// ce middleware sera executé à chaque requête entrante !
app.use(logger);


app.get("/", (req, res) => {
  res.redirect("/a");
});

app.get("/a", myFirstMiddleware, (req, res) => {
  res.send("im route a");
});

app.get("/b", myFirstMiddleware, middlewareModifyingTheRequest, (req, res) => {
  console.log("Un timestamp ???", req.laDateSaisie);
  res.send("im route b");
});

app.get("/c", logger, (req, res) => {
  res.send("im route c");
});

app.get("/d", myMiddleWithAParameter("foo, bar, baz"), (req, res) => {
  res.send("im route d " + req.chose);
});

app.get("/admin", protectAdminRoute, (req, res) => {
  res.send("im admin d");
});

app.get("/login", (req, res) => {
  res.send("im login");
});

app.listen(7777, () => {
  console.log("http://localhost:7777");
});
