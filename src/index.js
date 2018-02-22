class Sorter {
  constructor() {
    this.arr = [];
    this.len = 0;
    const REVERSE_COMPARATOR = (left, right) => right - left;
  }

  add(element) {
    this.len += 1;
    this.arr[this.len - 1] = element;
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.arr;
  }

  sort(indices = []) {
    var temp = [], ind = [];

    for (var i = 0; i < indices.length; i++) {
      ind[i] = indices[i];
    }

    for (var i = 0; i < ind.length; i++) {
      for (var j = i + 1; j < ind.length; j++) {
        if (ind[i] > ind[j]) {
          var boof = ind[i];
          ind[i] = ind[j];
          ind[j] = boof;
          i = 0;
        }
      }
    }

    for (var i = 0; i < ind.length; i++) {
      temp[i] = this.arr[ind[i]];
    }

    //bubble sort
    for (var i = 0; i < temp.length; i++) {
      for (var j = i + 1; j < temp.length; j++) {
        if (temp[i] > temp[j]) {
          var boof = temp[i];
          temp[i] = temp[j];
          temp[j] = boof;
          i = 0;
        }
      }
    }

    for (var i = 0; i < ind.length; i++)
      this.arr[ind[i]] = temp[i];
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

var sorter = new Sorter();

sorter.add(6);
sorter.add(5);
sorter.sort([0, 1]);

sorter.add(2);
sorter.add(1);
sorter.sort([1, 0]);

console.log(sorter.toArray());
console.log(sorter.length);

module.exports = Sorter;