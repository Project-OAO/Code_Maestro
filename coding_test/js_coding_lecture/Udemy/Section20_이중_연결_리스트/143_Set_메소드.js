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

  unshift(val) {
    const newNode = new Node(val);

    this.length += 1;

    if (!this.head) return this.push(val);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    return newNode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let targetNode;

    if (idx < Math.floor(this.length / 2)) {
      targetNode = this.head;
      for (let i = 0; i < idx; i++) {
        targetNode = targetNode.next;
      }
    } else {
      targetNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        targetNode = targetNode.prev;
      }
    }

    return targetNode;
  }

  set(idx, value) {
    const targetNode = this.get(idx);
    if (!targetNode) return false;
    targetNode.val = value;
    return true;
  }
}
