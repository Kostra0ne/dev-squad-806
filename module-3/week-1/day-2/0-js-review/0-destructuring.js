const cat = { age: 10 };

const { age, name } = cat;

console.log(age);
console.log(name);

// function printFullName(person) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

function printFullName({ lastName, firstName }) {
  console.log(`${firstName} ${lastName}`);
}

printFullName({ firstName: "Foo", lastName: "Bar" });

const people = [{ name: "My Name is Toto" }, "Bar", "Baz"];

const [feiuahfeaui, person2, person3, egaiyfgeaiygfea] = people;

console.log(feiuahfeaui, person2, person3, egaiyfgeaiygfea);

//  Renaming keys
const printObject = ({ color: objectColor, type: toto }) => {
  console.log(objectColor, toto);
};

printObject({ color: "black", type: "keyboard" });
