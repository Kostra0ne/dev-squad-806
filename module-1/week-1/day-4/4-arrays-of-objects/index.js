var users = [
  {
    name: "manon",
    age: 27,
    hobbies: ["foo", "bar", "baz"],
  },
  {
    name: "maya",
    age: 56,
    hobbies: ["cat", "cat", "cat"],
  },
  {
    name: "mala",
    age: 28,
  },
];

// console.log(users);

// for (let i = 0; i < users.length; i += 1) {
//   console.log(users[i].name);

//   if (users[i].hobbies !== undefined) {
//     console.log("HOBBIES ! \n");

//     for (let j = 0; j < users[i].hobbies.length; j++) {
//       console.log(users[i].hobbies[j]);
//     }
//   }
// }

console.log("--------- nested arrays ----------");

var nestedValues = [
  [1, 2, 3, 4, 5], // 0
  [true, false, false], // 1
  ["a", "b", "c", "d", "e", "f"], // 2
  [{ name: "foo" }, { name: "bar" }, { name: "baz" }], // 3
];

for (let i = 0; i < nestedValues.length; i++) {
  // we access the first level, eg : the arrays inside the array
  console.log(nestedValues[i]);
  // to accces each individual value in each nested array, we'll use a inner loop
  console.log("+++++");
  for (let j = 0; j < nestedValues[i].length; j++) {
    console.log(nestedValues[i][j]);
    console.log("*****");
  }
}

console.log("end of nested loop ....");
