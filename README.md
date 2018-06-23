# NoobJS

[![Build Status](https://travis-ci.org/invisal/noobjs.svg?branch=master)](https://travis-ci.org/invisal/noobjs)

NoobJS contains Javascript implementations of many algorithms.

### Implemented Algorithms

#### Machine Learning
- Linear Regression
- KNN Classifier

#### Math
- BigNumber
- Matrix Multiplication (Brute Force)
- Matrix Inverse (Gaussian Elimination)

#### Elementary Data Structure
- Disjoint Set
- Queue
- Stack
- Priority Queue (Binary Heap)
- Hash Priority Queue

#### Graph
- Graph Data Structure
- Prim's algorithm
- Kruskal's algorithm
- Breadth-first search
- Depth-first search

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
var { LinearRegression } = require('noobjs');

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
var { PriorityQueue, Stack, Queue } = require('noobjs');

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
