// while : you should provide an escape condition to a while loop
var n = 0;

while (n < 10) {
  n += 1; // n++
  console.log("increment", n);
}

console.log("----------------------");

// for : this is designed to parse (loop through) sequences
var sequence = "abcdefgh...";

for (let i = 0; i < sequence.length; i++) {
  console.log("current char : ", sequence[i]);
}

var hobbies = ["skate", "music", "video games"];

console.log("----------------------");

for (let index = 0; index < hobbies.length; index++) {
  console.log(`current hobby ${hobbies[index]}`);
  // above: with backticks, we can evaluate any JS code that resolves to string
}

console.log("----------------------");

var ironhackers = ["Menhaj", "Maya", "Manon", "Charlotte", "Spyros"]; // length(5)
//    0         1       2          3           4

for (let index = 0; index < ironhackers.length; index += 1) {
  console.log(
    `${ironhackers[index]} is ${ironhackers[index].length} chars long`
  );
}

// do...while
// eat your soup first... then you'll have dessert
var score = 0;

do {
    console.log("get coins to increment the score...");
    var randomNumber = Math.random(); // this will return a number between 0 and 1
    if (randomNumber > 0.5) score += 1;

} while(score < 10);

console.log("end of the do..while", score);


// we'll see other loops later on (for...in, forEach, for...of)
