// 최소이진힙을 이용한 우선순위 큐를 처음부터 다시 작성.

/*
  <Pseudo Code>
  Node
   1. 생성자에 값과 priority를 적는다.

  Priority Queue
  - Constructor
  1. 빈 배열 리스트를 작성한다. -> 여기에 이진 힙 형태로 저장된다.

  - Enqueue
  1. 제일 마지막에 삽입이 된다.
  2. Bubble Up을 한다.

  - Bubble Up
  1. 삽입된 값과 부모 값을 비교한다. 비교 후 삽입된 값이 더 작으면 부모와 교환한다.
  2. 이를 루트에 도달할때까지 반복한다.

  - Dequeue
  1. 제일 처음의 값과 마지막 값을 바꾼다.
  2. 마지막 값을 Pop하고, 이를 저장한다.
  3. 바꾼 값을 기준으로 Sink Down을 한다.
  4. Pop된 값을 리턴한다.

  - Sink Down
  1. 루트에 저장된 값과 자식을 2개를 비교해서 제일 작은 값을 부모와 교환한다.
  2. 이를 제일 끝 자식 노드에 닿을때까지 반복한다.
 */

class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let childNodeIdx = this.values.length - 1;
    let parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);

    while (
      this.values[childNodeIdx].priority < this.values[parentNodeIdx].priority
    ) {
      [this.values[childNodeIdx], this.values[parentNodeIdx]] = [
        this.values[parentNodeIdx],
        this.values[childNodeIdx],
      ];
      childNodeIdx = parentNodeIdx;
      parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);

      if (parentNodeIdx < 0) break;
    }
  }

  enqueue(priority, value) {
    const newNode = new Node(priority, value);
    this.values.push(newNode);
    if (this.values.length <= 1) return this.values;
    this.bubbleUp();
    return this.values;
  }

  sinkDown() {
    let curIdx = 0;
    let curNode = this.values[curIdx];
    let leftIdx = 1;
    let leftNode = this.values[leftIdx];
    let rightIdx = 2;
    let rightNode = this.values[rightIdx];
    let highIdx;
    let highNode;

    do {
      if (leftNode) {
        if (rightNode) {
          highIdx = leftNode.priority < rightNode.priority ? leftIdx : rightIdx;
          highNode = this.values[highIdx];
        } else {
          highIdx = leftIdx;
          highNode = leftNode;
        }
      } else {
        break;
      }

      if (curNode.priority > highNode.priority) {
        [this.values[curIdx], this.values[highIdx]] = [
          this.values[highIdx],
          this.values[curIdx],
        ];
      }

      curIdx = highIdx;
      curNode = this.values[highIdx];
      leftIdx = curIdx * 2 + 1;
      leftNode = this.values[leftIdx];
      rightIdx = curIdx * 2 + 2;
      rightNode = this.values[rightIdx];
    } while (true);
  }

  dequeue() {
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

const pq = new PriorityQueue();
pq.enqueue(5, 'a');
pq.enqueue(3, 'b');
pq.enqueue(7, 'c');
pq.enqueue(10, 'd');
pq.enqueue(1, 'e');
pq.enqueue(2, 'e');
console.log(pq);

console.log('---');

console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
