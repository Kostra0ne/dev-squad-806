function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function() {
    return !this.queueControl.length;
};

QueueDataStructure.prototype.canEnqueue = function() {
    return this.queueControl.length < this.MAX_SIZE;
};

QueueDataStructure.prototype.enqueue = function(val) {
    if (!this.canEnqueue()) return "Queue Overflow";
    this.queueControl.unshift(val); // adds value to the begining of the queue
    return this.queueControl;
};

QueueDataStructure.prototype.dequeue = function() {
    console.log(this.queueControl)
    return this.queueControl.length ? this.queueControl.pop() : "Queue Underflow";
};

export { QueueDataStructure };
