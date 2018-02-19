var Graph = require('../../src/graph/Graph')

test('test graph def', () => {

    var graph = new Graph();
    var a = graph.create_node('A');
    var b = graph.create_node('B');
    var c = graph.create_node('C');
    var d = graph.create_node('D');
    var e = graph.create_node('E');
    graph.connect(a, b, 1);
    graph.connect(a, c, 1);
    graph.connect(b, d, 1);

    // Self-Path
    var path1 = graph.path(c, c)
    expect(path1[0].obj).toEqual("C")

    // Empty Path
    var path2 = graph.path(a, e)
    expect(path2.length).toEqual(0)
    var path3 = graph.path(b, e)
    expect(path3.length).toEqual(0)
    var path4 = graph.path(d, e)
    expect(path4.length).toEqual(0)

    // Path
    var path5 = graph.path(a, b)
    expect(path5[0].obj).toEqual('A')
    expect(path5[1].obj).toEqual('B')

    var path6 = graph.path(c, d)
    expect(path6[0].obj).toEqual('C')
    expect(path6[1].obj).toEqual('A')
    expect(path6[2].obj).toEqual('B')
    expect(path6[3].obj).toEqual('D')

})