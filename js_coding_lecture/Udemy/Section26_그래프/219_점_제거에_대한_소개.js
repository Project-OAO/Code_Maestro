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

  removeEdge(v1, v2) {
    let idx1;
    let idx2;
    if (this.adjacencyList[v1].include(v2))
      idx1 = this.adjacencyList[v1].at(v2);
    if (this.adjacencyList[v2].include(v1))
      idx2 = this.adjacencyList[v2].at(v1);

    this.adjacencyList[v1].splice(idx1);
    this.adjacencyList[v2].splice(idx2);
  }

  removeEdge2(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    for (const e of this.adjacencyList) {
      this.removeEdge2(e, vertex);
    }

    delete this.adjacencyList[vertex];
  }

  removeVertex2(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge2(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}
