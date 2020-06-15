Array.prototype.myForEach = function (clbk) {
  // in this case, "this" represents the full array
  for (let i = 0; i < this.length; i += 1) {
    clbk(this[i], i, this);
  }
};

const arr = ["a", "b", "c", "d"];

arr.myForEach(function (currentValue, index, fullArray) {
  console.log(currentValue, index, fullArray);
});
