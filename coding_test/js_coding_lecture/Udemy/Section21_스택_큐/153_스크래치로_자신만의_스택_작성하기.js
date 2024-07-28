class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }

    this.first = newNode;
    this.size += 1;

    return this.size;
  }

  pop() {
    if (!this.first) return null;

    if (this.first === this.last) this.last = null;
    const poppedNode = this.first;
    this.first = poppedNode.next;
    this.size -= 1;

    return poppedNode.value;
  }
}
