'use strict';
const { Vertex } = require('../lib/graph.js');
const { Graph } = require('../lib/graph.js');
const { Edge } = require('../lib/graph.js');
// const { getEdge } = require('../lib/graph.js');


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

testGraph.addDirectedEdge(ten, two, 2);
testGraph.addDirectedEdge(ten, six, 5);
testGraph.addDirectedEdge(ten, three, 6);
testGraph.addDirectedEdge(two, seven, 10);
testGraph.addDirectedEdge(six, seven, 20);
testGraph.addDirectedEdge(six, eight, 1);
testGraph.addDirectedEdge(three, eight, 6);
testGraph.addDirectedEdge(eight, seven, 9);

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
    expect(actual).toEqual(7);

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

  it('should return "vertices are not defined" when no vertex is passed in as an argument', () => {

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

describe('breadthFirst', () => { 

  it('should return error when startNode is not defined', () => {
    
    let actual = testGraph.bfs();
    expect(actual).toBe("No valid start node");
  });

  it('should return an array of values', () => {
   
    let actual = testGraph.bfs(ten);
    expect(actual).toEqual([10,2,6,3,7,8]);                                                                                                                                                                                                                                                                                                                                                               
  });

  it('should return an array of unique values', () => {
    // console.log(testGraph.bfs(eight))
    let actual = testGraph.bfs(eight);
    expect(actual.length).toEqual(2);
  });
});    



describe('getEdges', () => { 

  it('should return false when array has less than 2 nodes', () => {
    let arr = [ten]
    let actual = testGraph.getEdge( arr);
    expect(actual).toBeFalsy();
  });

  it('should return false when there is no neighbor', () => {
    let arr = [ten, seven, eight];
    let actual = testGraph.getEdge(arr);
    expect(actual).toBeFalsy();   
  }); 

  it('should return false when there is no neighbor', () => {
    let arr = [ten, three, eight];
    let actual = testGraph.getEdge(arr);
    expect(actual).toEqual(12);  
  }); 

});
       

 

