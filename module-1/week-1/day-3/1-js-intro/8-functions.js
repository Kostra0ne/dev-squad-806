// functions are the verbs (actions) of your programs

// my first dummy-function
function sayFooBarBaz() {
  console.log("foo, bar, baz !!!");
}

sayFooBarBaz();
sayFooBarBaz();
sayFooBarBaz();

// ----------------------

function addTenToNumber(n) {
  return n + 10; // here we return a value
}

var result = addTenToNumber(10);

console.log("returned value a => ", result);

result = addTenToNumber(result);

console.log("returned value b => ", result);

var result2 = addTenToNumber(addTenToNumber(100));

console.log("returned value c => ", result2);

// function test() {}
// function test() { return undefined}
function test() {
  return;
}

var x = test();

console.log(x);

if (test()) {
  console.log("yay !");
} else {
  console.log("nay !");
}

function sum(a, b) {
  var res = a + b;
  if (isNaN(res)) throw new Error("Hey, i need 2 numbers to work properly !");
  return res;
}

var sumResult = sum(10, 20);

console.log("sumResult a => ", sumResult);

console.log("sumResult b => ", sum(10.23, 3000));

// console.log("sumResult c => ", sum("toto", 23));

console.log("^_^");

function createAnArray(a, b, c) {
  return [a, b, c];
}

console.log(createAnArray("a", "z", "x"));
console.log(createAnArray("Spyros", "Mary", "Malamine"));

function twoPossibleReturnValue(n) {
  if (n < 1000) return "Less than 1000";
  else return "More than or equal 1000";
}

console.log(twoPossibleReturnValue(9999));

function sumValuesOfArray(arr) {
  var tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    tmp += Number(arr[i]);
  }

  return tmp;
}

var sum = sumValuesOfArray([1, 22, 44, "123", 532, -10]);

console.log("result of the summed array", sum);

// In JS : Functions are first-class objects
// even if typeof function returns "function" (it's just a commodity)

/*
This page also illustrates it beautifully:

Really, just like any other variable

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
You can store the function in a variable
You can pass the function as a parameter to another function
You can return the function from a function
also read TrayMan's comment, interesting...

*/
