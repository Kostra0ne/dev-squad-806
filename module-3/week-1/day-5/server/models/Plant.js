const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  address: {
    number: String,
    street: String,
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
