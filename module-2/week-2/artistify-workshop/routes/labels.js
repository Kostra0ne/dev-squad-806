const express = require("express");
const router = new express.Router();
const labelModel = require("../models/Label");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITH "/labels"
// *********************************************

// PRIVATE ROUTES

router.get("/admin", (req, res, next) => {
  labelModel
    .find() // retreive all the documents in the labels collection
    .then(dbResults =>
      res.render("tables/labels", {
        labels: dbResults
      })
    )
    .catch(next);
});

router.get("/create", (req, res) => {
  res.render("forms/label");
});

module.exports = router;
