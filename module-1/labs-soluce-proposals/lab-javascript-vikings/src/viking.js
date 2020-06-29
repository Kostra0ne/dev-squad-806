// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => this.strength;

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry = () => "Odin Owns You All!";
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  getRandomFighters() {
    const vikingRand = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonRand = Math.floor(Math.random() * this.saxonArmy.length);
    return {
      viking: this.vikingArmy[vikingRand],
      vikingRand,
      saxon: this.saxonArmy[saxonRand],
      saxonRand
    };
  }

  vikingAttack() {
    const { viking, saxon, saxonRand } = this.getRandomFighters();
    saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonRand, 1);
      return "A Saxon has died in combat";
    }
  }

  saxonAttack() {
    const { viking, saxon, vikingRand } = this.getRandomFighters();
    viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingRand, 1);
    }
    return `${viking.name} has received ${saxon.strength} points of damage`;
  }

  showStatus() {
    if (!this.saxonArmy.length)
      return "Vikings have won the war of the century!";
    else if (!this.vikingArmy.length)
      return "Saxons have fought for their lives and survive another day...";
    else return "Vikings and Saxons are still in the thick of battle.";
  }
}
