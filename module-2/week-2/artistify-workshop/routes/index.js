const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;
