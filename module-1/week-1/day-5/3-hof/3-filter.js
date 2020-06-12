const fruits = ["pear", "peach", "banana", "mango", "blueberry"];

// filter a HOF, taking a callback as argument
// filter must return true OR false
// filter returns a new array containing the values that passed the test (true)
const fruitsStartingWithP = fruits.filter(function (fruit) {
  return fruit.startsWith("p"); // starsWith returns true or false
});

console.log("--------- FRUITS ----------");

console.log(fruitsStartingWithP);

const numbers = [1, 10, 1000, 100000, 1000000000];

const numbersBelow1000 = numbers.filter(n => n < 1000);

// const numbersBelow1000 = numbers.filter((n) => {
//  if (n < 1000) return true;
//  else return false;
// });

console.log("--------- NUMBERS ----------");

console.log(numbersBelow1000);
