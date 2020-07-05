const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const styleSchema = new Schema({
  name: String,
  color: String,
  wikiURL: String
});

const styleModel = mongoose.model("Style", styleSchema);

module.exports = styleModel;
