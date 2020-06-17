const fruits = ["apple", "orange", "pear", "mango"];
const fruits2 = ["apple", "mango", "orange", "pear", "mango", "pear"];

// function doPlural(fruit) {
//   return fruit + "s";
// }

function doPluralForMangosAndPears(fruit) {
  if (fruit === "mango" || fruit === "pear") return fruit + "s";
}

function keepOnlyMangoAndPear(fruit) {
  return fruit === "mango" || fruit === "pear";
}

const doPlural = (fruit) => fruit + "s";

const fruitsPlural = fruits.map(doPlural);

const fruitsPlural2 = fruits.filter(keepOnlyMangoAndPear).map(doPlural);

console.log(fruitsPlural2);

// REDUCE

const ironhackers = [
  { name: "jim", age: 20 },
  { name: "bill", age: 30 },
  { name: "jill", age: 40 },
];

// reduce convert one array to a signle value
// this single value can be of any type (array, object, boolean, number, string )

const sumOfIronhackersAges = ironhackers.reduce(
  (accumulator, currentIronhacker) => {
    const sum = accumulator + currentIronhacker.age;
    return sum;
  },
  0
);

console.log(sumOfIronhackersAges);
