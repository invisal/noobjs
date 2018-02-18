var Graph = require('../../src/graph/Graph');

function create_graph()
{
    let g = new Graph();
    let a = new Array(5);

    a[0] = g.create_node(0);
    a[1] = g.create_node(1);
    a[2] = g.create_node(2);
    a[3] = g.create_node(3);
    a[4] = g.create_node(4);

    g.connect(a[0], a[1], 5); // edge 0
    g.connect(a[0], a[2], 2); // edge 1
    g.connect(a[0], a[3], 4); // edge 2
    g.connect(a[0], a[4], 3); // edge 3
    g.connect(a[1], a[3], 6); // edge 4
    g.connect(a[2], a[3], 2); // edge 5 

    return [g, a];
}

test("prims'mst algorithm test", () => {

    let [g, a] = create_graph();
    let edges = g.mst('prim');
    let edges_id = edges.map((x) => x.id).sort();
    expect(edges_id).toEqual([ 0, 1, 3, 5 ]);

});

test("kruskal's mst algorithm test", () => {

    let [g, a] = create_graph();
    let edges = g.mst('kruskal');
    let edges_id = edges.map((x) => x.id).sort();
    expect(edges_id).toEqual([ 0, 1, 3, 5 ]);

});