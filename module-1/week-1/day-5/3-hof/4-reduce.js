const numbers = [1, 3, 4, 5, 100];

// reduce is a HOF, applied to an array
// it takes a callback as a first argument
//  this callback takes several arguments
//  ---- the accumulator
//  ---- the current value
//  ---- the current index
//  ---- the full array
// and an optional accumulator as 2nd argument
// if no accumulator is provided, the default acc will be the first array's value

const sum = numbers.reduce((accumulator, currVal, index) => {
  //console.log(accumulator)
  const sum = accumulator + currVal;
  return sum;
}, 0);

const x = numbers.reduce((a, v) => {
  a.push(v);
  return a;
}, []);

console.log(x);

const y = numbers.reduce((a, v, i) => {
  a["key-" + i] = v;
  return a;
}, {});

console.log(y);

const products = [
  { name: "shoes", price: 100, inStock: true },
  { name: "phone", price: 500, inStock: true },
  { name: "pear", price: 1, inStock: false },
];

const areAllProductsInStock = products.reduce((a, p) => {
    return a && p.inStock;
}, true);

// const areAllProductsInStock = products.reduce((a, p) => a && p.inStock, true);

// stack trace
// iteration 1 => acc is true , current value is true => returned is true
// iteration 2 => acc is true , current value is true => returned is true
// iteration 3 => acc is true , current value is false => returned is false
// ultimatly, this reduce returns false


console.log("all in stock ? " + areAllProductsInStock);