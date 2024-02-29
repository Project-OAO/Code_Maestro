// piece of data - val
// reference to nexdt node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    !this.head ? (this.head = newNode) : (this.tail.next = newNode);

    this.tail = newNode;
    this.length += 1;

    return this;
  }

  pop() {
    let pre = this.head;
    let after = pre;

    if (this.length <= 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return pre;
    }

    while (after.next) {
      pre = after;
      after = pre.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;

    return after;
  }

  shift() {
    if (this.length <= 0) return undefined;

    const tmp = this.head;
    this.head = tmp.next;
    if (this.length === 1) this.tail = null;

    this.length -= 1;

    return tmp;
  }

  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;

    if (!this.head) {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length += 1;

    return this;
  }
}
