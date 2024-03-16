class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertice) {
    if (!this.adjacencyList[`${vertice}`])
      this.adjacencyList[`${vertice}`] = [];

    return this.adjacencyList[`${vertice}`];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[`${vertex1}`] || !this.adjacencyList[`${vertex2}`])
      return null;

    if (this.adjacencyList[`${vertex1}`].include(`${vertex2}`)) return null;

    this.adjacencyList[`${vertex1}`].push(`${vertex2}`);
    this.adjacencyList[`${vertex2}`].push(`${vertex1}`);

    return this.adjacencyList;
  }
}
