// 그래프부터해서 처음부터 다시 구현을 해보자.

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

  DFS(node) {
    const visited = {};
    const result = [];

    const traverse = vertex => {
      result.push(vertex);
      visited[vertex] = true;
      const nodeList = this.adjacencyList[vertex].filter(v => !visited[v]);
      if (nodeList.length === 0) return null;
      nodeList.forEach(v => {
        if (!visited[v]) traverse(v);
      });
    };

    traverse(node);
    return result;
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

console.log(g.DFS('A'));
