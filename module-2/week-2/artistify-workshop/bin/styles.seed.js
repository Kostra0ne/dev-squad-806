require("dotenv").config();
require("./../config/mongodb");

const StyleModel = require("./../models/Style");

const demoStyles = [
  {
    name: "Jazz",
    color: "purple",
    wikiURL: "https://en.wikipedia.org/wiki/Jazz",
  },
  {
    name: "Rap",
    color: "#101",
    wikiURL: "https://en.wikipedia.org/wiki/Rapping",
  },
  {
    name: "Rock",
    color: "pink",
    wikiURL: "https://en.wikipedia.org/wiki/Rock_music",
  },
];

StyleModel.create(demoStyles)
.then(dbRes => {
    console.log(dbRes)
})
.catch(dbErr => {
    console.error(dbErr)
})