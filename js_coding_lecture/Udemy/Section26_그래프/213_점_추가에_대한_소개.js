class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertice) {
    if (!this.adjacencyList[`${vertice}`])
      this.adjacencyList[`${vertice}`] = [];

    return this.adjacencyList[`${vertice}`];
  }
}
