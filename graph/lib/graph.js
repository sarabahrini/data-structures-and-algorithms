
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
    const adjacency = this._adjacencyList.get(startVertex);
    adjacency.push(new Edge(endVertex, weight));
  }
  

  getNeighbors(vertex) {

    if (!this._adjacencyList.has(vertex) || typeof vertex === 'undefined') {
      return "vertices are not defined";
    }
    return [...this._adjacencyList.get(vertex)];
  }


  bfs(startNode) {
    if (!startNode) {
      return "No valid start node"
    }
    const arr = [];

    // set is a native JS object which collects items with no duplicates
    const visitedNodes = new Set();

    arr.push(startNode);
    //.add & .has  are built in methods for set
    visitedNodes.add(startNode);

    while (arr.length) {
      const currentNode = arr.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        arr.push(neighborNode);
      }
    }
    // console.log([...visitedNodes].map(vertex => vertex.value));
    return [...visitedNodes].map(vertex => vertex.value);

  }

  getEdge(arr) {

    if (arr.length < 2) return false;
    let cost = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      console.log(arr);

      let sN = arr[i];
      let eN = arr[i + 1];
      let isNeighbor = false;

      let neighbors = this.getNeighbors(sN);
      for (let n in neighbors) {
        console.log(neighbors[n].vertex, eN)
        if (neighbors[n].vertex === eN) {
          cost += neighbors[n].weight;
        } else continue;
      }
      if (!isNeighbor) return false;
    }
    return cost;
  }

}

module.exports = { Vertex, Graph, Edge};