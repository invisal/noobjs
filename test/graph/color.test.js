var Graph = require('../../src/graph/Graph')

test('test graph coloring', () => {

  let graph = new Graph();
  let a = graph.create_node('A');
  let b = graph.create_node('B');
  let c = graph.create_node('C');
  let d = graph.create_node('D');
  
  graph.connect(a, b);
  graph.connect(a, c);
  graph.connect(a, d);
  graph.connect(c, d);

  let number_of_color = graph.color();
  expect(number_of_color).toBe(3);
  expect(a.color).toBe(0);
  if (d.color === 1) expect(c.color).toBe(2);
  else if (d.color === 2) expect(c.color).toBe(1);
  else expect(true).toBe(false);
  expect(b.color).toBe(1);
});
