const app = require("express")();

app.get(["/", "home"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

// req.body les données postées
// req.params les parties variables du path (route)
// req.file pour les fichiers postées avec un form dont le enctype est multipart/formdata

app.get("/get-stuff", (req, res) => {
  res.json(req.query);
});

app.listen(7070, () => {
  console.log("http://localhost:7070");
});
