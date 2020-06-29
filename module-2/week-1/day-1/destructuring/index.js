const user = {
  name: "foo",
  age: 33,
  email: "foo@bar.baz",
};

// const name = user.name;
// const age = user.age;
// const email = user.email;

// console.log(name, " - ", age, " - ", email);

const user2 = {
  name: "billy",
  age: 20,
  email: "toto@titi.tata",
};

const { name, age, email } = user; // user2 is the target... we can extract (destructure) the props out of it for later use !!!

console.log("------------");
console.log(name, " - ", age, " - ", email);

const product = {
  name: "sneakers",
  price: 120,
  colors: ["black", "red"],
};

// below, extract name as (:) productName
const { name: productName, price, colors, ref = "1243GSGDGD" } = product;

console.log(productName, price, colors, ref);
console.log("------------");
console.log(product);

const cities = ["Paris", "Berlin", "Amsterdam", "Madrid", "Barcelona"];

const [a, b] = cities; // so you can destructure arrays as well :)

console.log(a, b); // here, it's not about the object's keys but the array's indexes instead !
console.log(cities[0], cities[1]);

const [, , city3, d] = cities;
console.log("------------");
console.log(city3, d);

const user3 = {
  name: "jill",
  lastname: "doe",
  age: 33,
};

function getFullName(name, lastname) {
  return `${name} - ${lastname}`;
}

// console.log(getFullName(user3.name, user3.lastname));

function getFullNameShorter({ name, lastname }) {
  return `${name} - ${lastname}`;
}

const x = getFullNameShorter(user3);
console.log(x);

// spread operator ...

const users1 = ["jill", "bill"];
const users2 = ["joe", "henry", "liz"];

const mergedUsers = [...users1, ...users2];

console.log("----merged users--------");
console.log(mergedUsers);

function add(...numbers) {
  // spread can be used to "convert" any amount of argument to an iterable
  // this make use of the arguments iterable : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  var sum = 0;
  // this is convenient when you want your function to perform weel without knowing in advance how many values you'll get as arguments
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

const a1 = add(1, 2);
const b2 = add(1, 2, 3, 4, 5);

console.log("----spread arguments--------");
console.log(a1, b2);
