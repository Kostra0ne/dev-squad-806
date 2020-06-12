var o = {
  desc: "i'm a simple object",
  nested: {
    prop: "this is going deeper",
    nested2: {
        good: true
    }
  },
};

var o2 = o;

console.log(o2);

o2.update = "i guess i'm only updating o2...";

// console.log(o2);

console.log(o);

// HOW CAN YOU CLONE (MAKE A COPY) of an object
console.log("-------- CLONE 1 -------");

var clone1 = Object.assign({}, o);

console.log(o === o2);
console.log(clone1 === o);
// clone1.nested.nested2.good = false;

// console.log("----- SUSPENS 1 -------");
// console.log(o.nested.nested2.good);


console.log("-------- CLONE 2 -------");

var clone2 = JSON.parse(JSON.stringify(o));
// clone2.nested.nested2.good = false;

console.log(clone2);
console.log(clone2 === o);

// console.log("----- SUSPENS 2 -------");
// console.log(o.nested.nested2.good);


console.log("-------- CLONE 3 -------");

var clone3 = { ...o };
clone3.nested.nested2.good = false;

console.log("----- SUSPENS 3 -------");
console.log(o.nested.nested2.good);


console.log(clone3);
console.log(clone3 === o);
