// 내가 짠 코드는 111번 참고. 이 코드는 강사님 코드를 참고한 버전
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

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let new
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('!');
list.traverse();
