class Person {
  constructor(n, l, a) {
    this.age = a;
    this.name = n;
    this.lastname = l;
  }

  getFullName() {
    return "firstname : " + this.name + ", lastname: " + this.lastname;
  }
}

const p1 = new Person("Toto", "Foo", 0);

console.log(p1, p1 instanceof Person);

console.log(p1.getFullName());

console.log("------------------------------");

class Dog {
  constructor(name, age, color, eyeColor) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.eyeColor = eyeColor;
  }

  bark() { // we call "methods" any function declared in class (OR tied to one Object's prototype)
    return "Waf Waf";
  }

  sleep() {
    return "zzzzzzzzz";
  }

}

const dog1 = new Dog("Wako", 10, "silver", "blue");
const dog2 = new Dog("Filou", 1, "black", "yellow");

console.log(dog1, dog1 instanceof Dog);

console.log(dog1.bark());
console.log(dog2.bark());
console.log(dog1.sleep());

// const products1 = ["a", "b", "c"];
// const products2 = new Array("a", "b", "c");


// const dog3 = {
//     name: "Rex",
//     age: 2,
//     bark: function () {
//         return "Waf Waf"
//     },
//     sleep: function() {
//         return "zzzzzzzz"
//     }
// };

// const dog4 = {
//     name: "Bar",
//     age: 5,
//     bark: function () {
//         return "Waf Waf"
//     },
//     sleep: function() {
//         return "zzzzzzzz"
//     }
// };