# NoobJS

[![Build Status](https://travis-ci.org/invisal/noobjs.svg?branch=master)](https://travis-ci.org/invisal/noobjs)

NoobJS contains Javascript implementations of many algorithms.

### Implemented Algorithms

#### Machine Learning
- [Linear Regression](https://github.com/invisal/noobjs/wiki/Linear-Regression)
- [KNN Classifier](https://github.com/invisal/noobjs/wiki/Nearest-Neighbors-Classifier)
- [KMean Clustering](https://github.com/invisal/noobjs/wiki/KMean-Clustering)

#### Graph
- [Graph Data Structure](https://github.com/invisal/noobjs/wiki/Graph)
- [Prim's algorithm](https://github.com/invisal/noobjs/wiki/Graph)
- [Kruskal's algorithm](https://github.com/invisal/noobjs/wiki/Graph)
- [Breadth-first search](https://github.com/invisal/noobjs/wiki/Graph)
- [Depth-first search](https://github.com/invisal/noobjs/wiki/Graph)
- [Graph Coloring using Greedy](https://github.com/invisal/noobjs/wiki/Graph-Coloring)

#### Math
- [BigNumber](https://github.com/invisal/noobjs/wiki/Big-Number)
- Matrix Multiplication (Brute Force)
- [Matrix Inverse (Gaussian Elimination)](https://github.com/invisal/noobjs/wiki/Linear-Algebra#matrix-inverse)

#### Elementary Data Structure
- [Disjoint Set](https://github.com/invisal/noobjs/wiki/Disjoint-Set)
- Queue
- Stack
- [Priority Queue (Binary Heap)](https://github.com/invisal/noobjs/wiki/Priority-Queue)
- Hash Priority Queue

#### Tree
- [Ball Tree](https://github.com/invisal/noobjs/wiki/Ball-Tree)

#### Random Number
- Linear Congruential Generator
- Marsaglia Polar Method

#### Other
- QuickSelect
- Partition (Lomuto & Hoare)
- Fisher Yates Shuffle
- Sieve of Eratosthenes

## Examples

Using Linear Regression

```javascript
var { LinearRegression } = noobjs;

var x = [ 
    [0.17], [2.47], [1.73], [4.43], [4.51], 
    [4.59], [1.24], [0.84], [0.09], [0.51], 
    [2.06], [2.89], [0.81], [4.39], [1.20] 
];

var y = [ 
    [100.0], [410.0], [250.0], [560.0], [440.0], 
    [510.0], [230.0], [170.0], [100.0], [140.0], 
    [250.0], [460.0], [160.0], [490.0], [210.0] 
];

var model = new LinearRegression();
model.fit(x, y);
console.log( model.predict( [ [4.0], [2.0], [1.5] ] ) );
```

Using Elementary Data Structures

```javascript
var { PriorityQueue, Stack, Queue } = noobjs;

var p = new PriorityQueue();
p.push(7);
p.push(8);
p.push(6);

console.log(p.pop());  // 6
console.log(p.pop());  // 7
console.log(p.pop());  // 8
```

Using NoobJS to solve linear system of equations

```javascript
var { LinearAlgebra } = noobjs;

//  x + 2y -  z = 2
// 2x + 2y + 2z = 12
//  x -  y + 2z = 5
var a = [
  [ 1,  2,  -1],
  [ 2,  2,   2],
  [ 1, -1,   2]
];

var b = [ [2], [12], [5] ];

console.log(LinearAlgebra.mat_multiply(LinearAlgebra.mat_inverse(a), b));
// [ 1.00, 2.00, 3.00 ]
```
