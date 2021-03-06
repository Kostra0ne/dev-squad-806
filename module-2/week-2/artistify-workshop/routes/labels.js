const express = require("express");
const router = new express.Router();
const labelModel = require("../models/Label");
const uploader = require("./../config/cloudinary");

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

router.get("/update/:id", (req, res, next) => {
  labelModel
    .findById(req.params.id) // this will fetch one album by id from db
    .then(label => {
      res.render("forms/label-update", {
        label
      });
    })
    .catch(next); // catched if an error occured );
});

router.get("/delete/:id", (req, res, next) => {
  labelModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "label successfully deleted");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

router.post("/create", uploader.single("logo"), (req, res, next) => {
  const newLabel = req.body;
  console.log(req.file);
  // req.file, si defined, est un object
  // ici, req.file contient les infos du fichiers qui a déjà eté uploadé vers le storage definit pour multer
  if (req.file) newLabel.logo = req.file.path; // on peut accéder à l'url du fichier hébergé chez cloudinary (ou tout autre storage associé à multer lors de la config)

  labelModel
    .create(newLabel) // use the model and try doc insertion in database
    .then(() => {
      req.flash("success", "label successfully created");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

router.post("/update/:id", (req, res, next) => {
  labelModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      req.flash("success", "label successfully updated");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

module.exports = router;
