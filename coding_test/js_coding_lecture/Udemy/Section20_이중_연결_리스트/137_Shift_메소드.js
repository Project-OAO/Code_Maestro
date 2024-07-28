class Node {
  constructor(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const { tail } = this;
    const newTail = tail.prev;

    if (!newTail) {
      this.head = null;
      this.tail = null;
    } else {
      tail.prev = null;
      newTail.next = null;
      this.tail = newTail;
    }

    this.length -= 1;
    return tail;
  }

  shift() {
    if (!this.head) return undefined;

    const { head } = this;
    const newHead = head.next;

    if (!this.tail.prev) {
      this.tail = null;
    } else {
      head.next = null;
      newHead.prev = null;
    }

    this.head = newHead;
    this.length -= 1;

    return head;
  }
}
