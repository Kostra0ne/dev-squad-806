const express = require("express");
const router = new express.Router();
const artistModel = require("../models/Artist");
const albumModel = require("../models/Album");
const labelModel = require("../models/Label");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WiTh "/albums"
// *********************************************

router.get("/all", (req, res, next) => {
  albumModel
    .find() // retreive all the documents in the artists collection
    .then(dbResults => {
      res.render("lists/albums", {
        albums: dbResults
      });
    })
    .catch(next);
});

router.get("/page/:id", (req, res, next) => {
  albumModel
    .findById(req.params.id) // retreive all the documents in the artists collection
    .then(dbResult => {
      res.render("page-album", {
        album: dbResult
      });
    })
    .catch(next);
});

router.get("/admin", (req, res, next) => {
  albumModel
    .find() // retreive all the documents in the albums collection
    .populate("artist")
    .populate("label")
    .then(dbResults => {
      res.render("tables/albums", {
        albums: dbResults
      });
    })
    .catch(next);
});

router.get("/create", (req, res, next) => {
  Promise.all([artistModel.find(), labelModel.find()])
    .then(dbRes => {
      // console.log(dbRes);
      
      res.render("forms/album", { 
        artists: dbRes[0], 
        labels: dbRes[1]
      });
    })
    .catch(next);
});

router.get("/update/:id", (req, res, next) => {
  Promise.all([
    albumModel.findById(req.params.id).populate("artist"),
    labelModel.find(),
    artistModel.find()
  ])
    .then(dbRes => {
      res.render("forms/album-update", {
        album: dbRes[0],
        labels: dbRes[1],
        artists: dbRes[2]
      });
    })
    .catch(next);
});

router.get("/delete/:id", (req, res, next) => {
  albumModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "album successfully deleted");
      res.redirect("/albums/admin");
    })
    .catch(next);
});

router.post("/create", (req, res, next) => {
  const newAlbum = req.body;
  if (req.body.cover === "") newAlbum.cover = undefined;

  albumModel
    .create(newAlbum) // use the model and try doc insertion in database
    .then(() => {
      req.flash("success", "album successfully created");
      res.redirect("/albums/admin");
    })
    .catch(next);
});

router.post("/update/:id", (req, res, next) => {
  albumModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      req.flash("success", "album successfully updated");
      res.redirect("/albums/admin");
    })
    .catch(next);
});

module.exports = router;
