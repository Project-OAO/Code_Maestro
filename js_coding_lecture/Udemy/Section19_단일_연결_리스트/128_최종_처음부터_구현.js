// 배운 내용을 처음부터 전부 구현해보는 과정

class Node {
  constructor(value) {
    this.val = value;
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

  pop(val) {
    if (!this.head) return undefined;

    let pre = this.head;
    let cur = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return cur;
    }

    while (!cur.next) {
      pre = cur;
      cur = cur.next;
    }

    pre.next = null;

    this.length -= 1;

    return cur;
  }

  shift() {
    if (!this.head) return undefined;

    const pre = this.head;
    const cur = this.head.next ? this.head.next : this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return pre;
    }

    pre.next = null;
    this.head = cur;

    this.length -= 1;

    return pre;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.push(newNode);
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;

    return this;
  }

  get(idx) {
    if (!this.head) return undefined;
    if (idx < 0 || idx >= this.length) return undefined;

    let node = this.head;

    for (let i = 0; i < idx; i++) {
      node = node.next;
    }

    return node;
  }

  set(idx, val) {
    const cur = this.get(idx);

    if (!cur) return undefined;
    cur.val = val;

    return this;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;

    if (!this.head || idx === this.length) {
      this.push(val);
      return this;
    }

    if (idx === 0) {
      this.unshift(val);
      return this;
    }

    const pre = this.get(idx - 1);
    const { next } = pre;
    const newNode = new Node(val);

    pre.next = newNode;
    newNode.next = next;
    this.length += 1;

    return this;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift(idx);
    if (idx === this.length - 1) return this.pop();

    const pre = this.get(idx - 1);
    const { next } = pre;

    pre.next = next.next;
    this.length -= 1;

    return this;
  }

  reverse() {
    if (!this.head) return undefined;
    if (this.head === this.tail) return this;

    let pre = null;
    let cur = this.head;
    let after = cur;

    [this.head, this.tail] = [this.tail, this.head];

    while (cur.next) {
      after = cur.next;
      cur.next = pre;
      pre = cur;
      cur = after;
    }

    return this;
  }
}
