class GraphNode {
    constructor(graph, id, obj) {
        this.graph = graph;
        this.id = id;
        this.obj = obj;
        this.color = -1;
    }
}

module.exports = GraphNode