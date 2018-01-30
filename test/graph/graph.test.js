var Graph = require('../../src/graph/Graph')

test('test graph', () => {

    let g = new Graph()
    let u = g.create_node('apple')
    let v = g.create_node('banana')
    let w = g.create_node('cat')

    g.connect(u, v, 10)
    g.connect(u, w, 15)

    // Edges Length
    expect(g.edges(u).length).toEqual(2)
    expect(g.edges(v).length).toEqual(1)
    expect(g.edges(w).length).toEqual(1)

    // Check Elements
    expect(g.edges(w)[0].other(w)).toEqual(u)
    expect(g.edges(u)[0].other(u)).toEqual(v)
    expect(g.edges(u)[1].other(u)).toEqual(w)

    // Check Weights
    expect(g.edges(w)[0].cost).toEqual(15)
    expect(g.edges(v)[0].cost).toEqual(10)
    expect(g.edges(u)[0].cost).toEqual(10)
    expect(g.edges(u)[1].cost).toEqual(15)

    // Check Adj Nodes
    expect(g.adj(u)[0]).toEqual(v)
    expect(g.adj(u)[1]).toEqual(w)
    expect(g.adj(w)[0]).toEqual(u)

})