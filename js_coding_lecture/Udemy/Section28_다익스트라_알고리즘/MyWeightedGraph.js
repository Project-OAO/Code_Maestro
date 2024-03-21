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

  Dijkstra(start){
    const previous = {};
    const distance = {};
    const priorityQueue = new PriorityQueue();

    for (const e in this.adjacencyList) {
      distance[e] = Infinity;
      previous[e] = null;
    }

    distance[start] = 0;
    priorityQueue.enqueue(distance[start], start);

    while (priorityQueue.values.length !== 0) {
      const current = priorityQueue.dequeue().value;
      const list = this.adjacencyList[current];
      const currentDist = distance[current];
      list.forEach(e => {
        const dist = e.weight;
        if (currentDist + dist < distance[e.node]) {
          distance[e.node] = currentDist + dist;
          priorityQueue.enqueue(distance[e.node], e.node);
        }
      });
    }

    return distance;
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

// graph.Dijkstra('A', 'E');
console.log(graph.Dijkstra('A', 'E'));
