console.log(Boolean(NaN));
console.log(!!NaN);
console.log(!!"false");

var cat = {
  name: "Fugee",
  age: 0.9,
  color: "blue",
  favoriteToy: {
    name: "ball",
    color: "brown",
  },
};

var dog = {
  name: "Wako",
  age: 10,
  color: "grey",
};

console.log(cat.favoriteToy.name); // direct indexing
var prop = "color";
console.log(cat[prop]); // indirect indexing
console.log(cat["favoriteToy"]["color"]); // indirect indexing

console.log("------- the if scenario -------");

var player = {
  name: "Mario",
  score: 10,
};

if (player.name === "Mario") {
  console.log("The player name is " + player.name);
  console.log(player.score);
  if (player.score >= 10) {
      console.log("keep up !!!")
  }
}
