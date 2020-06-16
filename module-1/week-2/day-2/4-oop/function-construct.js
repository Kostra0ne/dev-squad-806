function foo() {}

const x = foo();
console.log(x);

const xx = new foo();
console.log(xx); // xx is an instance of foo
// it's a way to plan the creation of objects of a certain type...

function Person(name = "John", lastname = "Doe", age = 0) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  return this;
}

Person.prototype.getFullName = function (params) {
  return this.name + " " + this.lastname;
};

const p1 = new Person("Guillaume", "Amangoua");
const p2 = new Person("Tatijana", "Rajcic");
const p3 = new Person();
// console.log(p1, p1 instanceof Person, p1 instanceof foo);
// console.log(p2, p2 instanceof Person);
// console.log(p1 === p2);
console.log(p1, p2, p3);

console.log(p1.getFullName());
console.log(p2.getFullName());
