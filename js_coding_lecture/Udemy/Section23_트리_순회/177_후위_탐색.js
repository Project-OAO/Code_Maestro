class QNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new QNode(value);

    !this.first ? (this.first = newNode) : (this.last.next = newNode);
    this.last = newNode;
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (!this.first) return undefined;

    const tmp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = tmp.next;
    this.size -= 1;

    return tmp.val;
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else if (value > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else return null;
    }
  }

  BFT() {
    const queue = new Queue();
    const result = [];

    if (!this.root) return undefined;

    queue.enqueue(this.root);

    while (queue.size > 0) {
      const tmp = queue.dequeue();
      result.push(tmp.val);
      if (tmp.left) queue.enqueue(tmp.left);
      if (tmp.right) queue.enqueue(tmp.right);
    }

    return result;
  }

  DFT_PreOrder() {
    const result = [];

    function help(node) {
      if (!node) return null;
      result.push(node.val);
      if (node.left) help(node.left);
      if (node.right) help(node.right);
    }

    help(this.root);

    return result;
  }

  DFT_PostOrder() {
    const result = [];

    function help(node) {
      if (node.left) help(node.left);
      if (node.right) help(node.right);
      result.push(node.val);
    }

    help(this.root);

    return result;
  }
}

const t = new Tree();
t.push(10);
t.push(6);
t.push(3);
t.push(8);
t.push(15);
t.push(20);
console.log(t);
console.log(t.DFT_PreOrder());
console.log(t.DFT_PostOrder());
