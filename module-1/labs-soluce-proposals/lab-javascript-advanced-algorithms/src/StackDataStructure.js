function StackDataStructure(max) {
  this.stackControl = [];
  this.MAX_SIZE = max || 10;
}

StackDataStructure.prototype.isEmpty = function() {
  return !this.stackControl.length;
};

StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
};

StackDataStructure.prototype.push = function(val) {
  if (!this.canPush()) return "Stack Overflow";
  this.stackControl.push(val);
  return this.stackControl;
};

StackDataStructure.prototype.pop = function() {
  if (this.isEmpty()) return "Stack Underflow";
  return this.stackControl.pop();
};

export { StackDataStructure };
