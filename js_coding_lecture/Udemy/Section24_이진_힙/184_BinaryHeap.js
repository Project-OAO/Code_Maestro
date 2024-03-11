// 강의 수강에 앞서서 직접 한번 구현해보는 시간
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(index) {
    let parentIndex;
    let childIndex = index;
    while (childIndex > 0) {
      parentIndex = Math.floor((childIndex - 1) / 2);

      if (this.values[parentIndex] < this.values[childIndex]) {
        [this.values[parentIndex], this.values[childIndex]] = [
          this.values[childIndex],
          this.values[parentIndex],
        ];
        childIndex = parentIndex;
      } else {
        break;
      }
    }

    return this.values;
  }

  insert(value) {
    this.values.push(value);
    return this.bubbleUp(this.values.length - 1);
  }

  sinkDown() {
    let current = 0;
    let left = 1;
    let right = 2;
    let big;

    if (this.values[left]) {
      if (this.values[right]) {
        big = this.values[left] > this.values[right] ? left : right;
      } else {
        big = left;
      }
    } else {
      big = current;
    }

    while (this.values[current] < this.values[big]) {
      [this.values[current], this.values[big]] = [
        this.values[big],
        this.values[current],
      ];
      current = big;
      left = current * 2 + 1;
      right = current * 2 + 2;

      if (this.values[left]) {
        if (this.values[right]) {
          big = this.values[left] > this.values[right] ? left : right;
        } else {
          big = left;
        }
      } else {
        big = current;
      }
    }

    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return null;

    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    const popped = this.values.pop();

    this.sinkDown();

    return popped;
  }
}

const h = new MaxBinaryHeap();
h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);
console.log(h.values);
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.extractMax());
console.log(h.values);
