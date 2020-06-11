// LiveScript produced by Netscape
// MicroSoft competition  : they cloned LiveScript JScript
// Adobe competition : they cloned LiveScript ActionScript (flash)
// Alliance Netscape + Sun Microsystem (Java Editor) : [Live]JavaScript
// Netscape standard the langage : ECMAScript
// We dev talk about JS, they often use the term VanillaScript (the core langage)

// Lisp Or Scheme for the philo AND C/C++ for the syntax => JavaScript

/*

hello world in Java

class HelloWorld {
    static public void main( String args[] ) {
        System.out.println( "Hello World!" );
    }
}

*/
/*

hello world in JS

console.log("hello, world");

*/

// JS is functional loosely typed programming langage

// in JS, we have 7 data types
// --------------------------------------------------------
// primitives types
// --------------------------------------------------------

// string
// 'hello'

// "hello"

// `hello`

// all the string are built via a function called String()

// --------------------------------------------------------

// number (-inf : +inf)
// 1
// -1
// 2.2
// 12 * 33.3

// all the numbers are built via a function called Number()

// --------------------------------------------------------

// boolean
// data type where values can either true or false

// TABLES OR THRUTH

// AND
// true  AND true   : true
// false AND false  : false
// false AND true   : false
// true  AND false  : false

// OR
// true  OR true   : true
// false OR false  : false
// false OR true   : true
// true  OR false  : true

// all the booleans are built via a function called Boolean()

// --------------------------------------------------------

// null

// temporary OR definitve lack of value
// null is always the result of an assignment (writing)

// --------------------------------------------------------

// undefined
// is void, nada, not there, wallou, yapas

// --------------------------------------------------------

// (Symbols)

// in a nutshell they are here as utilty tools for frameworks/librairie designers
// it's a way to create namespace (unique) object's keys...

// object
// object litterals

var gui = {
  name: "gui",
  lastname: "amg",
  age: 39.99,
  lovesJS: true,
  favoriteColor: null,
  cat: {
    name: "Fugee",
    age: 1,
    color: "white and grey",
  },
  hobbies: ["electro music", "skateboard", "MAO", "cooking"],
};

// arrays

// function


console.log("hey hey");
