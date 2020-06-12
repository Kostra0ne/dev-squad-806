Array.prototype.myForEach = function (clbk) {
  for (let i = 0; i < this.length; i += 1) {
    clbk(this[i], i, this);
  }
};

["a", "b", "c", "d"].myForEach(function (currentValue, index, fullArray) {
  console.log(currentValue, index, fullArray);
});
