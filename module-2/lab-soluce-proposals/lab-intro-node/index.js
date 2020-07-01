class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) throw new OutOfBounds("Meh sorry, cannot compute this value");
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new EmptySortedList("Empty list, sorry Brah");
    return this.items.reduce((acc, v) => (acc < v) ? v : acc, this.get(0))
  }

  min() {
    if (!this.items.length) throw new EmptySortedList("Empty list, sorry Brah");
    return this.items.reduce((acc, v) => (acc > v) ? v : acc, this.get(0))
  }

  sum() {
    return this.items.reduce((acc, v) => acc + v, 0)
  }

  avg() {
    if (!this.items.length) throw new EmptySortedList("Empty list, sorry Brah");
    return this.sum() / this.items.length;
  }
  
}

module.exports = SortedList;
