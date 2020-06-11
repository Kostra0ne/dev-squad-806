
// function declaration
function getFoo() {
  return "foo";
}

// function expression
var getBar = function () {
  return "bar";
};

var x1 = getFoo(); // foo
var x2 = getBar(); // bar

// in JS, functions are values : that means we can reference them
// ... in an array for example 

const funcs = [getBar, getFoo];

// funcs is an array containing the 2 previous functions
// you still can run them like so :

var x3 = funcs[0](); // bar
var x4 = funcs[1](); // foo


// warning : functions expressions are not hoisted : you can't execute them before their initialisation
// that's the big difference with function declarations that can be executed anywhere in the file

// getBaz(); // this throws an Error, since getBaz is only defined line 31

var getBaz = function () {
  return "baz";
};

var x5 = getBaz(); // baz