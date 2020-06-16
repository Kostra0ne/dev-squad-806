class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  move() {
    return `i'm ${this.name} the ${this.species} and 'im moving`;
  }
}

class Dog extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  bark() {
    return "woof";
  }

  move() {
    return this.bark() + " " + super.move();
  }
}

class Fish extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  bubble() {
    return "bloop";
  }
}

const goldFish = new Fish("Albert", "Fish");
const pittbull = new Dog("Alphonse", "Dog");
console.log(pittbull.move());
console.log(goldFish.move());
