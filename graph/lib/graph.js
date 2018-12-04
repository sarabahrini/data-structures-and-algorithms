
'use strict';

// const util = require('util');
// const dfs = require('./dfs');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (this._adjacencyList.has(vertex)) {
      return "vertex already exist";
    }
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      return "vertices are not defined";
    }
    const _adjacency = this._adjacencyList.get(startVertex);
    _adjacency.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {

    if (!this._adjacencyList.has(vertex) || typeof vertex === 'undefined') {
      return "vertices are not defined";
    }
    return [...this._adjacencyList.get(vertex)];
  }


  bfs(startNode) {
if(!startNode){
  return "No valid start node"
}
    const arr = [];

    // set is a native JS object which collects items with no duplicates
    const visitedNodes = new Set();

    arr.push(startNode);
    //.add & .has  are built in methods for set
    visitedNodes.add(startNode);

    while(arr.length){
      const currentNode = arr.shift();
      const neighbors = this.getNeighbors(currentNode);
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        if(visitedNodes.has(neighborNode)){
          continue;
        }else {
          visitedNodes.add(neighborNode);
        }
        arr.push(neighborNode);
        }
      }
      // console.log([...visitedNodes].map(vertex => vertex.value));
      return [...visitedNodes].map(vertex => vertex.value);


  // dfs(startNode) {
  }

}

// console.log(util.inspect(graph, false, null, true));
// console.log(util.inspect(graph.bfs(ten), false, null, true));
// console.log(util.inspect(graph.dfs(ten), false, null, true));

module.exports = { Vertex, Graph, Edge };