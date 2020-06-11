// NaN Not A Number
typeof NaN // "number"
NaN === NaN // false

// NaN is the result of an invalid mathematical operation
var result = "foo" * "bar"; // NaN
var dontDoIt = 12 % 0; // NaN

// to know for sure if a value is NaN, use the core function isNaN(value)
isNaN(NaN);

// NaN is toxic => it will goes down your program flow ... and cause bugs