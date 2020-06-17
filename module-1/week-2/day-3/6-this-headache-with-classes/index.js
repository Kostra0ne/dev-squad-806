class Foo {
  constructor() {
    console.log("A >>> ", this);
    this.bar = "a random value";
  }

  doSomeStuff() {
    console.log("B >>> ", this);
  }

  doSomeStuffLater() {
    console.log("C >>> ", this, this.bar);

    // regular function always redefine their own value of "this"
    setTimeout(function () {
      console.log("D >>> ", this, this.bar);
    }, 1000);

    // fat arrow functions always use the parent's scope value of "this"
    setTimeout(() => {
      console.log("E' >>> ", this, this.bar);
    }, 1000);
  }
}

const f = new Foo();
// console.log(f);

// f.doSomeStuff();
const hahahah = f.doSomeStuff.bind("oh noooooo"); 
// with Function.bind(), you can set the value of "this" with whatever you need
hahahah(); // trolled, sorry

// f.doSomeStuffLater();


// LONG STORY SHORT =======>
// ALWAYS DOUBLE CHECK WHEN USING THE "THIS" KEYWORD (make a log)
