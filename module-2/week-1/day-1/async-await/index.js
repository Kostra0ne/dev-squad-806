const axios = require("axios");
const url = "https://restcountries.eu/rest/v2/all";

// utility function designed to get a json list of all countries :)
const getAllCountries = () => axios.get(url);

// IIFE that will consume the data fetched asynchronously
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// IIFE => means Immediatly Invoked Function Expression
// IFFE => a complicated way to say : a function that auto-runs (executes where declared, automatically)
(async function () {
  try {
    const countries = await getAllCountries();
    console.trace("here");
    // console.log(countries);
  } catch (err) {
    console.log(err);
  }
})();

(async function () {
  getAllCountries()
    .then((countries) => {
      console.trace("here");
      //   console.log(countries);
    })
    .catch((err) => {
      console.log(err);
    });
})(); // IFFE is a complicated way to say : this function will auto-run
