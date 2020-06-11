var sneaker = {
  brand: "Nike",
  model: "Air Force 1",
  colors: ["black", "red"],
  price: 120,
  stock: 10,
};

var isEqual = sneaker["stock"] === sneaker.stock;

// loop through objects properties/values

for (let key in sneaker) {
  console.log(key + " : " + sneaker[key]);
}

var user = {
  name: "manon",
  cohort: "0820",
  sweaterColor: "red",
};

console.log("------------");


let x = null;

for (let prop in user) {
  console.log(prop + " : " + user[prop]);
  if (prop === "cohort") x = user[prop];
}

console.log("------------");

console.log(x);