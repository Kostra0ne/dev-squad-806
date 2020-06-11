// var students = new Array();
var students = ["Maya", "Axel", "Malamine", "Mary"];
//                 0       1         2         3
console.log(students.length);

console.log(students);
console.log("---------------");

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

// console.log("---------------");

// var index = 0;
// while (index < students.length) {
//   console.log(students[index]);
//   index++;
// }

console.log("---------------");

for (let index = 0; index < students.length; index++) {
  console.log(students[index]);
}

console.log("---------------");

students[3] = "Fanny";
console.log(students);

console.log("------PUSH (add a value to the end) ---------");

students.push("Mary");
students.push("Toto");
console.log(students);


console.log("------SPLICE---------");
students.splice(5, 1); // remove the 6th value
// students.splice(3, 1);// remove the 4th value
// students.splice(3); // remove from the 4th value to the end 

console.log(students);


console.log("------UNSHIFT (add a value to the start) ---------");
students.unshift("Audrey");
console.log(students);

console.log("------SHIFT (remove the first value) ---------");
students.shift();
console.log(students);

console.log("------POP (remove the last value) ---------");
students.pop();
console.log(students);

console.log("------ INCLUDES (check if a value is included in an array) ---------");
var isInArray = students.includes("Malamine");
// var indexOfMaya = students.indexOf("Maya");

console.log(isInArray, students.indexOf("Maya"));


console.log("------ Loop through array of numbers ---------");

var numbers1 = [1, 1, 1, 1, 1];
//             0  1  2  3  4 

var numbers2 = [22, 44, 55, 83838, 10000, 6.55];
//              0   1   2    3       4     5

// for (let i = 0; i < numbers.length; i++) {
//     console.log(i, numbers[i]);
// }

// code a function returning the sum of values contained the array passed as argument
function sumArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var res1 = sumArray(numbers1);
var res2 = sumArray(numbers2);
console.log(res1, res2);

// fill an array with the opposite number
function test(arr) {
    var opposites = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val > 0) opposites.push(-Math.abs(val));
        else opposites.push(Math.abs(val));
        // opposites.push(val > 0 ? -Math.abs(val) : Math.abs(val)); // with the ternary
    }
    return opposites;
}

var x = test([1, -3, 4, 5]);
console.log(x);

