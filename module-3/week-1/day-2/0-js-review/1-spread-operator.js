const cat = { age: 10, name: "Foo-G" };

// const newCat = cat;
// console.log(newCat === cat);
// newCat.age = 20;
// console.log(cat);
// const newCat = { ...cat };

// console.log(newCat);

const people = ["Foo", "Bar", "Baz"];

const copyPeople = [...people];
// const copyPeople = people;

console.log(copyPeople === people);

copyPeople[0] = "feiuahfuahfoaehfae";
console.log(people);
console.log(copyPeople);
