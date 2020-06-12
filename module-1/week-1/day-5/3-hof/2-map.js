const numbers = [1, 20, 3, 4, 40];
const users = ["jill", "jim", "bill"];

// map is looping through all the targeted array's values
// map is meant to modify each (or some) values
// map is returning a brand new array

console.log("----------- NUMBERS -------------");

function doubleValue(v) {
  return v * 2;
}

const doubledNumbers = numbers.map(doubleValue);

console.log(numbers, doubledNumbers);

console.log("----------- STRINGS -------------");

function toUpperCase(v) {
  return v.toUpperCase();
}

const toUpperCaseShort = (v) => v.toUpperCase();

const uppercasedUsers = users.map(toUpperCaseShort);

console.log(uppercasedUsers);

console.log("----------- OBJECTS -------------");

const products = [
  { name: "shoes", price: 100 },
  { name: "phone", price: 500 },
  { name: "pear", price: 1 },
];

const apply10PercentDiscount = function (product) {
  const clone = { ...product };
  clone.price *= 0.9;
  return clone;
  //  below : what you shoud not do (unless you want to modify the original objects)
  //  product.price *= .90;
  //  return product;
};

const discountedProducts = products.map(apply10PercentDiscount);

console.log(products);
console.log(discountedProducts);
console.log(products === discountedProducts);
