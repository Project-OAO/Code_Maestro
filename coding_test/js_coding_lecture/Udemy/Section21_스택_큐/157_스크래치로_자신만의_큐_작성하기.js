class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    !this.first ? (this.first = newNode) : (this.last.next = newNode);

    this.last = newNode;
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const dequeued = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size -= 1;

    return dequeued;
  }
}
