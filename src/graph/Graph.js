var GraphNode = require('./GraphNode')
var GraphEdge = require('./GraphEdge')

class Graph {

    constructor() {
        this._node_count = 0
        this._edge_count = 0
        this._nodes = []
        this._edges = []
        this._node_edges = []
    }

    create_node(obj) {
        let node = new GraphNode(this, this._node_count++, obj)
        this._nodes.push(node)
        this._node_edges.push([])
        return node
    }

    connect(u, v, cost) {
        let edge = new GraphEdge(this._edge_count++, u, v, cost)
        this._edges.push(edge)
        this._node_edges[u.id].push(edge)
        this._node_edges[v.id].push(edge)
        return edge
    }

    edges(u) {
        return this._node_edges[u.id]
    }

    adj(u) {
        let edges = this._node_edges[u.id]
        let nodes = []
        for (let edge of edges) {
            nodes.push(edge.other(u))
        }
        return nodes
    }
}

module.exports = Graph