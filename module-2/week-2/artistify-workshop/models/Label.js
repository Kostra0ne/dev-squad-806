const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const labelSchema = new Schema({
  name: String,
  city: String,
  country: String,
  street: String,
  streetNb: Number,
  logo: {
    type: String,
    default:
      "https://s2.qwant.com/thumbr/0x380/d/d/5f6b36b6db8c6784af8ef1f5ccec36254bcfada7672f4c873af2f7cd992995/logo-default.png?u=http%3A%2F%2Fwww.resetyourbody.com%2Fwp-content%2Fuploads%2FCOMPANY_LOGO%2Flogo-default.png&q=0&b=1&p=0&a=1"
  }
});

const labelModel = mongoose.model("Label", labelSchema);

module.exports = labelModel;
