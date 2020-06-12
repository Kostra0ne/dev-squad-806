const mixedValues1 = ["hello", 123, false, "toto", 5000];

const mixedValues2 = ["a", "b", 1, 10];

function sum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (typeof val === "object") {
      throw new TypeError("Invalid data type !!!");
    }
    sum += typeof val === "string" ? val.length : Number(val);
  }
  return sum;
}

const res1 = sum(mixedValues1);
const res2 = sum(mixedValues2);

console.log(res1, res2);
