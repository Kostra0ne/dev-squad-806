// *************
// D.I.Y - H.O.F
// *************

const products = [
  { id: 1, name: "smart phone", price: 400, stock: 0 },
  { id: 2, name: "smart watch", price: 300, stock: 100 },
  { id: 3, name: "smart frigo", price: 650, stock: 10 },
  { id: 4, name: "smart home", price: 1000000, stock: 0 },
  { id: 5, name: "tablet Samsung", price: 420, stock: 1000 },
  { id: 6, name: "iphone", price: 1000, stock: 40 },
  { id: 7, name: "ipad", price: 500, stock: 0 },
];

// A - use forEach to print each product in the console
console.log("--------- A -----------");
products.forEach((p) => console.log(p));

// next is same as above with a classic function declaration as callback
// products.forEach(function(product) {
//   console.log(product);
// });

// B - use forEach to print the name of each product with a price that is less than 500
console.log("--------- B -----------");
products.forEach((p) => p.price < 500 && console.log(p));

// next is same as above, but longer :)
products.forEach(function (product) {
  if (product.price < 500) console.log(product);
});

// C - use filter to create a new array containing only the products with stock
console.log("--------- C -----------");
// const inStock = products.filter((p) => p.stock > 0);

// next is same as above, but longer :)
const inStock = products.filter(function (product) {
  if (product.stock > 0) return true;
  else return false;
});

console.log("in stock :", inStock);

// D - use map to create a new array of strings, containing the product's names in uppercase
console.log("--------- D -----------");
// const upperCased = products.map((p) => p.name.toUpperCase());

const upperCased = products.map(function (product) {
  return product.name.toUpperCase();
});

console.log("uppercased :", upperCased);

// E - use Array.sort() to sort the products by price (ascending order)
console.log("--------- E -----------");
products.sort((a, b) => a.price - b.price);
console.log("ascending prices :", products);

// F - use Array.sort() to sort the products by id (descending order)
console.log("--------- F -----------");
products.sort((a, b) => b.id - a.id);
console.log("descending ids :", products);

// G - use reduce to get the sum of all product's prices
console.log("--------- G -----------");
const sum = products.reduce((acc, prod) => (acc += prod.price), 0);

// const sum = products.reduce(function(accumulator, product) {
//     return accumulator + product.price
// }, 0);

console.log("sum :", sum);

/**
 * hints:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
