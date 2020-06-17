import { universalAnswer } from "./universal-answer.js";
import { foo, bar as baz } from "./foo.js";
import toto from "./universal-answer.js";


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

console.log("what is the meaning of life >>>>", universalAnswer);
console.log("is JS fun ??? >>>", toto);

console.log(foo());
console.log(baz());