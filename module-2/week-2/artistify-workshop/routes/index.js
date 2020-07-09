const express = require("express");
const router = new express.Router();
const protectAdminRoute = require("./../middlewares/protectAdminRoute")

router.get("/", (req, res) => {
  res.render("home");
});


router.get("/admin", protectAdminRoute, (req, res) => {
  res.render("admin");
});

module.exports = router;
