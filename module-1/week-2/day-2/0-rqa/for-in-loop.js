const ingredients = {
  apple: {
    name: "apple",
    price: 1,
  },
  banana: {
    name: "banana",
    price: 2,
  },
  mango: {
    name: "mango",
    price: 3,
  },
};

const state = {
  apple: true,
  banana: false,
  mango: true,
};

// review for...in : )
for (let key in state) {
  console.log(typeof key, key);
  console.log(state[key]);
  console.log(ingredients[key]);
}

// reminder about direct/indirect indexing for objects !!!
var cat = {
  name: "Fugee",
  age: 1,
};

console.log("----------------");
console.log(cat.name === cat["name"]); // same values here
