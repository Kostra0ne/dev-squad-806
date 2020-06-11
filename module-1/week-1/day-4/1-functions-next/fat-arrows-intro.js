// fat arrow functions

const multiply = (a, b) => {
  var check = Number(a) * Number(b);
  if (isNaN(check)) throw new TypeError("a and b must be of type number !");
  return check;
};


/**
 * the 4 functios below are doing exactly the same thing
 * these are just options, available for you
 * pick the one you're most confortable with :)
 */

// function getWordLength(word) {
//     return word.length;
// }
// const getWordLength = (word) => { return word.length };
// const getWordLength = (word) => word.length;
const getWordLength = word => word.length;

var res = multiply(10, 10);

var res2 = getWordLength("toto");

console.log(res2);







