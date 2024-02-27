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

    if (this.length === 0) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return pre.val;
    }

    while (after.next) {
      pre = after;
      after = pre.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;

    return after.val;
  }
}

const list = new SinglyLinkedList();
list.push(3);
list.push(4);
list.push(5);
console.log(list);
console.log(list.pop());
console.log(list);

console.log('----------');

const list2 = new SinglyLinkedList();
list2.push(6);
console.log(list2);
console.log(list2.pop());
console.log(list2);
