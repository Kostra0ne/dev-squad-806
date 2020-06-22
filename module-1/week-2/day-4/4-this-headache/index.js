// GLOBAL OBJECT ?
console.log("A >>>");
console.log(this);

// REGULAR FUNCTION
function foo() {
  console.log("B >>>");
  console.log(this);
}

// FAT ARROW FUNCTION
const bar = () => {
  console.log("C >>>");
  console.log(this);
};

// IN A CLASS
class Baz {
  constructor() {
    console.log("D >>>");
    console.log(this);
  }

  // METHOD 1
  doSomething() {
    console.log("E >>>");
    console.log(this);
  }

  // METHOD 2 (Async)
  doSomethingLater() {
    console.log("F >>>");
    console.log(this);

    // with a regular function
    setTimeout(function () {
      console.log("G >>>");
      console.log(this);
    }, 1000);

    // with a fat arrow function
    setTimeout(() => {
      console.log("H >>>");
      console.log(this);
    }, 2000);
  }
}

foo();
bar();
const o = new Baz();
o.doSomething();
o.doSomethingLater();

document.getElementById("btn-1").onclick = foo;
document.getElementById("btn-2").onclick = bar;
document.getElementById("btn-3").onclick = foo.bind("headache");

// CONCLUSION => ALWAYS DOUBLE CHECK WHEN DEALING WITH "THIS" KEYWORD
