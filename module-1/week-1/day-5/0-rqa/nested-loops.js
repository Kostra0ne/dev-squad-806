const nestedArrays = [
  [100, 1000, 10000, 100000],
  [1, 2, 3, 4],
  [-1, -10, -20, -30],
];

for (let i = 0; i < nestedArrays.length; i += 1) {
  console.log(nestedArrays[i]); // access the first level (the nestedd arrays themselves)...
  nestedArrays[i][0];
}

const mixedValues = [
  "Menhaj",
  { baz: false },
  1,
  "Gui",
  { foo: true },
  123,
  "Fanny",
  -10,
  "...",
]; // l(7)
//      0       1   2     3     4       5     6    (last index of an array is ALWAYS equal to array.length - 1)

for (let i = 0; i < mixedValues.length; i++) {
  // console.log(`${i} => ${mixedValues[i]}`);
  if (typeof mixedValues[i] === "string") console.log("hey it's a String");
  else if (typeof mixedValues[i] === "number") console.log("hey it's a Number");
  else if (typeof mixedValues[i] === "object") console.log("That's definetly an Object dude...")
}
