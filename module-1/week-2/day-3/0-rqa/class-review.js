class Ironhacker {
  constructor(fn, ln) {
    // this represents ANY object built with the Ironhacker class
    this.firstname = fn;
    this.lastname = ln;
    return "foo";
  }

  greetings() {
    console.log(">>>>", this);
    return `Hey, i'm ${this.firstname} ${this.lastname}, how are you ?!`;
  }
}

const hacker1 = new Ironhacker("john", "doe"); // each generated object will have its own "this" value
const hacker2 = new Ironhacker("jane", "doe"); // each generated object will have its own "this" value

console.log(hacker1);
console.log(hacker2);

console.log(hacker2.greetings());

console.log("-------------------------------");

// --------------------------------------------
// the old school way ... not usefull anymore :)
// --------------------------------------------

function Foo() {
  if (!(this instanceof Foo)) {
    throw new TypeError(
      "Constructor Ironhacker cannot be invoked without 'new'"
    );
  }
}

const foo1 = new Foo();

try {
  const foo2 = Foo();
} catch (err) {
  console.error(err);
}
