'use strict';
const{Vertex} = require ('../lib/graph.js');
const{Graph} = require ('../lib/graph.js');

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
console.log(eight)

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

describe('Graph ',()=>{
  it('should be instance of graph', () => {});
});

describe('addVertex',()=>{
  it('should return undefined when vertex is not passed in', () => {
    let actual = graph.addVertex();
    expect(actual).toBe(undefined);
  });

  it('should create a vertex', () => {
    const newGraph = new Graph();
    newGraph.addVertex(eight);
    expect(newGraph._adjacencyList.get(eight)).toEqual([]);
  });

  it('should create the second vertex', ()=>{
    const newGraph = new Graph();
    newGraph.addVertex(eight);
    newGraph.addVertex(seven);
    let actual = newGraph._adjacencyList.size; 
    expect(actual).toEqual(2);
  });
});

describe('addDirectedEdge',() => {
  it('should return undefined when "vertices are not defined"', () => {
    const newGraph = new Graph();
    newGraph.addVertex(ten);
    let actual = newGraph.addDirectedEdge(ten, two);
    expect(actual).toBe('vertices are not defined');
  });

  it('should create a "vertices are not defined"', () => {
    const newGraph = new Graph();
    newGraph.addVertex(ten);
    newGraph.addVertex(two);
    let actual = newGraph.addDirectedEdge(ten);
    expect(actual).toBe('vertices are not defined');
  });

  it('should add direct edge with defined vertices', ()=>{
    const newGraph = new Graph();
    newGraph.addVertex(ten);
    newGraph.addVertex(two);
    newGraph.addDirectedEdge(ten,two);
    let actual = newGraph._adjacencyList.get(ten);
    expect(actual.length).toEqual(1);
  });
});

describe('getNeighbors',() => {
  it('should return "vertex is not passed in"', () => {
    const newGraph = new Graph();
    newGraph.addVertex(ten);
    newGraph.addVertex(two);
    newGraph.addDirectedEdge(ten,two);
    let actual = newGraph.getNeighbors(ten).length;
    console.log(newGraph.getNeighbors(ten))
    expect(actual).toEqual(1);
  });

  it('should return the number of neighbors of the corresponding vertex', () => {

    const newGraph = new Graph();

    newGraph.addVertex(ten);
    newGraph.addVertex(two);
    newGraph.addVertex(six);
    newGraph.addDirectedEdge(ten, two);
    newGraph.addDirectedEdge(ten, six);
    
    let actual = newGraph.getNeighbors(ten).length;
    expect(actual).toEqual(2);
  });

  it('should return "vertices are not defined" when vertex is not passed ', ()=>{
    const newGraph = new Graph();

    newGraph.addVertex(ten);
    newGraph.addVertex(two);
    newGraph.addVertex(six);
    newGraph.addDirectedEdge(ten, two);
    newGraph.addDirectedEdge(ten, six);
    
    let actual = newGraph.getNeighbors();
    expect(actual).toBe("vertices are not defined");
  });
});