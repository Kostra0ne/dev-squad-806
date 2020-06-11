function sum(a, b) {
  var sum = Number(a) + Number(b);
  if (isNaN(sum)) return "no good";
  else return sum;
}
