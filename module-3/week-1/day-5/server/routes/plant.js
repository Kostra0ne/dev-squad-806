const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant");

router.get("/", (req, res, next) => {
  Plant.find()
    .then((plantDocuments) => {
      res.status(200).json(plantDocuments);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res, next) => {
  Plant.findById(req.params.id)
    .then((plantDocument) => {
      res.status(200).json(plantDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res, next) => {
  // Verifify req.body
  Plant.create(req.body)
    .then((plantDocument) => {
      res.status(201).json(plantDocument);
    })
    .catch((error) => res.status(500).json(error));
});

router.patch("/:id", (req, res, next) => {
  Plant.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((plantDocument) => {
      res.status(200).json(plantDocument);
    })
    .catch((error) => res.status(500).json(error));
});

router.delete("/:id", (req, res, next) => {
  Plant.findByIdAndDelete(req.params.id)
    .then((plantDocument) => {
      //    null
      res.sendStatus(204);
    })
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
