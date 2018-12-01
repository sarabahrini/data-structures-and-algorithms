'use strict';
const { Vertex } = require('../lib/graph.js');
const { Graph } = require('../lib/graph.js');

const testGraph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
console.log(eight)

testGraph.addVertex(ten);
testGraph.addVertex(two);
testGraph.addVertex(six);
testGraph.addVertex(seven);
testGraph.addVertex(three);
testGraph.addVertex(eight);

testGraph.addDirectedEdge(ten, two);
testGraph.addDirectedEdge(ten, six);
testGraph.addDirectedEdge(ten, three);
testGraph.addDirectedEdge(two, seven);
testGraph.addDirectedEdge(six, seven);
testGraph.addDirectedEdge(six, eight);
testGraph.addDirectedEdge(three, eight);
testGraph.addDirectedEdge(eight, seven);

console.log(testGraph);

describe('addVertex', () => {

  it('should return undefined when vertex is not passed in', () => {
    let actual = testGraph.addVertex();
    expect(actual).toBe(undefined);
  });

  it('should return "vertex already exist" when adding an existing vertex', () => {

    let actual = testGraph.addVertex(ten);
    expect(actual).toEqual("vertex already exist");

  });

  it('should create multiple vertices', () => {

    let actual = testGraph._adjacencyList.size;
    expect(actual).toEqual(6);

  });
});

describe('addDirectedEdge', () => {

  it('should return error when "vertices are not defined"', () => {
    let actual = testGraph.addDirectedEdge(ten, null);
    expect(actual).toBe('vertices are not defined');
  });

  it('should create multiple edges for defined vertices', () => {
    let actual = testGraph._adjacencyList.get(ten).length;
    expect(actual).toEqual(3);
  });

  it('should return error when graph is empty', () => {
    const newGraph = new Graph();
    let actual = newGraph.addDirectedEdge(ten, two);
    expect(actual).toBe("vertices are not defined");
  });

});

describe('getNeighbors', () => {

  it('should return "vertices are not defined" when no vertext is passed in as an argument', () => {

    let actual = testGraph.getNeighbors();
    expect(actual).toEqual("vertices are not defined");

  });

  it('should return the number of neighbors of the corresponding vertex', () => {

    let actual = testGraph.getNeighbors(ten).length;
    expect(actual).toEqual(3);

  });

  it('should return "vertices are not defined" when an undefined vertex is passed in ', () => {

    let actual = testGraph.getNeighbors(null);
    expect(actual).toBe("vertices are not defined");
  });

});