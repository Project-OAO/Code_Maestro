import {PriorityQueue} from './PriorityQueue.js';

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (this.adjacencyList[value]) return undefined;

    this.adjacencyList[value] = [];

    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] || this.adjacencyList[vertex1].includes(vertex2)) return undefined;

    this.adjacencyList[vertex1].push({node:vertex2, weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});

    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1].includes(vertex2)) return undefined;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v.node !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v.node !== vertex1);

    return this.adjacencyList;
  }

  removeVertex(vertex) {
    const targetList = this.adjacencyList[vertex];

    targetList.forEach(e => {
      this.adjacencyList[e] = this.adjacencyList[e].filter(v => v.node !== vertex);
    });

    delete this.adjacencyList[vertex];

    return this.adjacencyList;
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // build up initial state
    for (const vertex in this.adjacencyList){
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex,Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length){
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.Dijkstra('A', 'E'));
