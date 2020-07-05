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

router.get("/create", (req, res) => {
  res.render("forms/style");
});

module.exports = router;
