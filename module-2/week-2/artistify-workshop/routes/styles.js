const express = require("express");
const router = new express.Router();
const styleModel = require("./../models/Style");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITH "/styles"
// *********************************************

// handle and render the initial view
router.get("/admin", (req, res, next) => {
  styleModel
    .find() // retreive all the documents in the labels collection
    .then(dbResults =>
      res.render("tables/styles", {
        styles: dbResults
      })
    )
    .catch(next);
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    await styleModel.findByIdAndRemove(req.params.id);
    res.redirect("/styles/admin")
  } catch(err) {
    next(err);
  }
});

router.get("/create", (req, res) => {
  res.render("forms/style");
});

router.get("/update/:id", async (req, res, next) => {
  try {
    const style = await styleModel.findById(req.params.id);
    res.render("forms/style-update.hbs", style);
  } catch(err) {
    next(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    await styleModel.create(req.body);
    res.redirect("/styles/admin")
  } catch(err) {
    next(err);
  }
});


router.post("/update/:id", async (req, res) => {
  try {
    await styleModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/styles/admin");
  } catch(err) {
    next(err);
  }
});



module.exports = router;
