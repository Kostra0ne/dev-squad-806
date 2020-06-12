// 2 / Écrire une fonction hello.
// Dans le corps de hello, afficher la chaîne «hello» dans la console.
// Ne pas utiliser return pour cette fonction.
// Quelle est la valeur de console.log(hello()) et pourquoi ?

function sayHello() {
  console.log("hello");
}

var res1 = sayHello();

console.log("res1 =>", res1);

// 3 / Écrire une fonction dummyReturn, prenant un paramètre p.
// Retourner p, non modifié.
// Tester avec l’instruction console.log(dummyReturn())
// Tester avec une affectation, var x = dummyReturn(), log(x)

function dummyReturn(p) {
  return p;
}

var res2 = dummyReturn("Mary");
console.log("res2 =>", res2);

var res3 = dummyReturn([1, 3, 33]);
console.log("res3 =>", res3);

// 4 / Écrire une fonction foo.
// foo ne prend pas de paramètre.
// Retourner la chaîne «bar» quand elle est exécutée.
// Tester avec l’instruction console.log(foo())
// Tester avec une affectation, var x = foo()

function foo() {
  return "bar";
}

var baz = foo();

/**
 *
 * @param {*} val
 * @return {mixed}
 */
function whenShouldIReturn1(val) {
  var tmp;
  if (val == "foo") {
    tmp = "That's a foo brah...";
  } else if (val === "bar") {
    tmp = "That's a bar brah...";
  } else {
    tmp = "That's a something else brah...";
  }
  return tmp;
}

function whenShouldIReturn2(val) {
  if (val == "foo") {
    return "That's a foo brah...";
  } else if (val === "bar") {
    return "That's a bar brah...";
  } else {
    return "That's a something else brah...";
  }
}

function whenShouldIReturn3(val) {
  return val == "foo"
    ? "That's a foo brah..."
    : val == "bar"
    ? "That's a bar brah..."
    : "That's a something else brah...";
}

const whenShouldIReturn4 = (val) =>
  val == "foo"
    ? "That's a foo brah..."
    : val == "bar"
    ? "That's a bar brah..."
    : "That's a something else brah...";

var res4 = whenShouldIReturn();
