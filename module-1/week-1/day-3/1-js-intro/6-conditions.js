// if
var x = 10;

if (x === 10) {
  console.log("correct");
}

if (x < 100) console.log("correct too !");
console.log("this will run anyway");

if (x < 1000) {
  console.log("correct too !");
  console.log("this will run anyway");
}

// else

if (x < 0) {
  console.log("no way");
} else {
  console.log("the evaluated condition was falsy");
}

// else if

var userName = "Jill";

if (userName === "Jim") console.log("nope 1");
else if (userName === "Gilles") console.log("nope 2");
else if (userName === "John") console.log("nope 3");
else console.log("Here we are");


// you can have a look to the switch statement...
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
// Sidenote : I always trust Douglas (Crockford), so i never use it
