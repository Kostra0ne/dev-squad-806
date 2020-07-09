const express = require("express");
const router = new express.Router();
const artistModel = require("../models/Artist");
const styleModel = require("../models/Style");
const uploader = require("./../config/cloudinary");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITh "/artists"
// *********************************************

// PUBLIC ROUTES

router.get("/all", (req, res, next) => {
  artistModel
    .find() // retreive all the documents in the artists collection
    .populate("style")
    .then((dbResults) => {
      res.render("lists/artists", {
        artists: dbResults,
      });
    })
    .catch(next);
});

router.get("/page/:id", (req, res, next) => {
  artistModel
    .findById(req.params.id)
    .populate("style")
    .then((artist) => {
      res.render("page-artist", { artist });
    })
    .catch(next);
});

// PRIVATE ROUTES

router.get("/admin", protectAdminRoute, (req, res, next) => {
  artistModel
    .find() // retreive all the documents in the artists collection
    .populate("style")
    .then((dbResults) => {

      console.log(dbResults);
      
      res.render("tables/artists", {
        artists: dbResults,
      });
    })
    .catch(next);
});

router.get("/create", protectAdminRoute, async (req, res) => {
  try {
    res.render("forms/artist", {
      js: ["form-artist"],
      styles: await styleModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

router.post("/create", protectAdminRoute, uploader.single("picture"), (req, res, next) => {
  const { name, description, isBand, style } = req.body;

  artistModel
    .create({
      name,
      description,
      isBand: isBand === "yes",
      style,
      picture: req.file ? req.file.path : undefined,
    })
    .then(() => {
      req.flash("success", "artist successfully created");
      res.redirect("/artists/admin");
    })
    .catch(next);
});

router.get("/update/:id", protectAdminRoute, (req, res, next) => {
  Promise.all([
    artistModel.findById(req.params.id).populate("style"),
    styleModel.find(),
  ])
    .then((dbRes) => {
      res.render("forms/artist-update", { js: ["form-artist"], artist: dbRes[0], styles: dbRes[1] });
    })
    .catch(next);
});

router.post("/update/:id", protectAdminRoute, uploader.single("picture"), (req, res, next) => {
  const updatedArtist = req.body;

  if (req.file) updatedArtist.picture = req.file.path;

  (updatedArtist.isBand = updatedArtist.isBand === "yes"),
    artistModel
      .findByIdAndUpdate(req.params.id, updatedArtist)
      .then(() => {
        req.flash("success", "artist successfully updated");
        res.redirect("/artists/admin");
      })
      .catch(next);
});

router.get("/delete/:id", protectAdminRoute, (req, res, next) => {
  artistModel
    .findByIdAndDelete(req.params.id)
    .then((dbRes) => {
      req.flash("success", "artist successfully deleted");
      res.redirect("/artists/admin");
    })
    .catch(next);
});

module.exports = router;
