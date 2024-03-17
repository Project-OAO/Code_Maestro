class Node {
  constructor(value) {
    this.val = value;
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

    !this.first ? (this.last = newNode) : (newNode.next = this.first);

    this.first = newNode;
    this.size += 1;

    return this;
  }

  pop() {
    if (!this.first) return undefined;

    const tmp = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size -= 1;
    return tmp.val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    !this.first ? (this.first = newNode) : (this.last.next = newNode);

    this.last = newNode;
    this.size += 1;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    if (this.first === this.last) this.last = null;

    const tmp = this.first;
    this.first = this.first.next;
    this.size -= 1;

    return tmp.val;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) return undefined;
    if (!this.adjacencyList[vertex2]) return undefined;

    if (this.adjacencyList[vertex1].includes(vertex2)) return null;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2,
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1,
    );
  }

  removeVertex(vertex) {
    const target = this.adjacencyList[vertex];

    for (const e of target) {
      this.removeEdge(vertex, e);
    }

    delete this.adjacencyList[vertex];
  }

  DFS2(start) {
    const result = [];
    const visited = {};
    const { adjacencyList } = this;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })(start);

      return result;
    });
  }

  DFS(start) {
    const result = [];
    const visited = {};
    const stack = new Stack();

    stack.push(start);
    visited[start] = true;

    while (stack.size) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach(e => {
        if (!visited[e]) {
          visited[e] = true;
          stack.push(e);
        }
      });
    }

    return result;
  }

  BFS(start) {
    const result = [];
    const visited = {};
    const queue = new Queue();

    queue.enqueue(start);
    visited[start] = true;

    while (queue.size) {
      const current = queue.dequeue();
      result.push(current);
      this.adjacencyList[current].forEach(e => {
        if (!visited[e]) {
          queue.enqueue(e);
          visited[e] = true;
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

console.log(g.BFS('A'));
