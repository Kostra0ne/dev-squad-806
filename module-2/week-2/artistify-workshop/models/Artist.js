const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  picture: {
    type: String,
    default: "https://media.gettyimages.com/vectors/default-male-and-female-avatar-profile-picture-icon-grey-man-and-vector-id653036106?b=1&k=6&m=653036106&s=612x612&w=0&h=V22fSP9Jn_EUL3wi-xFuUsLFQ5F6YC3E39gDIaklIyo="
  },
  description: String,
  isBand: Boolean,
  rates: [Number],
  // style: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Style"
  // },
});

const artistModel = mongoose.model("Artist", artistSchema);

module.exports = artistModel;
