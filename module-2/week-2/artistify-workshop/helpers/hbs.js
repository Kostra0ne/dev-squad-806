const hbs = require("hbs");
const moment = require("moment");

// CUSTOM HELPERS

// function below: add the ternary operator functionnality to .hbs files
// usage : {{ ternary true "yay" "nay " }} => prints yay
// usage : {{ ternary NaN "yay" "nay " }} => prints nay

hbs.registerHelper("ternary", (test, yes, no) => (test ? yes : no));

// add comparison operator feature to hbs templates
/* 

USAGE =>

{{#compare 1 10 operator="<" }}
  awesome, 1 is less thant 10 !!!
{{/compare }}
*/

hbs.registerHelper("compare", function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

  var operator = options.hash.operator || "==";

  var operators = {
    "==": function(l, r) {
      return l == r;
    },
    "===": function(l, r) {
      return l === r;
    },
    "!=": function(l, r) {
      return l != r;
    },
    "<": function(l, r) {
      return l < r;
    },
    ">": function(l, r) {
      return l > r;
    },
    "<=": function(l, r) {
      return l <= r;
    },
    ">=": function(l, r) {
      return l >= r;
    },
    typeof: function(l, r) {
      return typeof l == r;
    }
  };

  if (!operators[operator])
    throw new Error(
      "Handlerbars Helper 'compare' doesn't know the operator " + operator
    );

  var result = operators[operator](lvalue, rvalue);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper("format-date", function(rule) {
  console.log("----rule------+");
  console.log(rule);
  console.log("-----this-----+");
  console.log(this);
  // if (!rule) rule = "YYYY-MM-DD";
  return "foo"
  // return moment(date).format(rule);
});

hbs.registerHelper("toto", function(number) {
  return number === 0 ? "la tête à toto" : "pas la tête à toto";
});
