class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (this.adjacencyList[value]) return undefined;

    this.adjacencyList[value] = [];

    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] || this.adjacencyList[vertex1].includes(vertex2)) return undefined;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1].includes(vertex2)) return undefined;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);

    return this.adjacencyList;
  }

  removeVertex(vertex) {
    const targetList = this.adjacencyList[vertex];

    targetList.forEach(e => {
      this.adjacencyList[e] = this.adjacencyList[e].filter(v => v !== vertex);
    });

    delete this.adjacencyList[vertex];

    return this.adjacencyList;
  }
}