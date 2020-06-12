function x() {
  return "i'm x";
}

function y() {
  return "i'm y";
}

function z(callback) {
  return "i'm z " + callback();
}

function getUniversalAnswer() {
  return 42;
}

function getFullName(user, callback) {
    callback(user.name, user.lastname)
}

function printFullName(name, lastname) {
  console.log(v);
}

getFullName({name: "gui", lastname: "amg"}, printFullName);



// a callback is a function passed as an argument (parameter) to another function

var r1 = x();
var r2 = y();
var r3 = z(x);
var r4 = z(y);
var r5 = z(getUniversalAnswer);

console.log(r3);
console.log(r4);
console.log(r5);
