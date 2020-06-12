const numbers = [1, 20, 3, 4, 40];

const nestedNumbers = [
  [100, 1000, 10000, 100000],
  [1, 2, 3, 4],
  [-1, -10, -20, -30],
];

function printValue(v) {
  console.log(v);
}

// numbers.forEach(printValue);

// numbers.forEach(function (val) {
//   console.log(val);
// });

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

numbers.forEach((v) => console.log(v));

nestedNumbers.forEach((arr) => {
  arr.forEach((v) => {
    console.log(v);
  });
});

const users = ["jill", "bill", "jim"];

const x = users.forEach(function (user, index, fullArray) {
  console.log(`${index} - ${user}`);
  console.log(fullArray);
});


console.log("test", x)



// Array.prototype.choubidou = function (v) {
//   return "choubidoooo wah " + v;
// };

// console.log(numbers.choubidou("wah"));

