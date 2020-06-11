function getCharsCount(word = "default") {
  return word.length;
}

var res = getCharsCount("Cha'");
console.log(res);

function greetCharacter(character) {
  if (character.name !== "Bowser") return `Greetings ${character.name}`;
  else return "Evil Bowser, your end is near !";
}

console.log(greetCharacter({ name: "Mario" }));
console.log(greetCharacter({ name: "Bowser" }));
