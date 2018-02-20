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

    edges(u = null) {
        if (u === null) return this._edges;
        return this._node_edges[u.id]
    }

    edges_count() {
        return this._edge_count;
    }

    nodes() {
        return this._nodes;
    }

    nodes_count() {
        return this._node_count;
    }

    adj(u) {
        let edges = this._node_edges[u.id]
        let nodes = []
        for (let edge of edges) {
            nodes.push(edge.other(u))
        }
        return nodes
    }

    mst(algorithm = 'prim') 
    {
        if (algorithm === 'prim') {
            let prim_mst = require('./PrimMST');
            return prim_mst(this);
        } else if (algorithm === 'kruskal') {
            let kruskal_mst = require('./KruskalMST');
            return kruskal_mst(this);
        }

        return false;
    }

    path(src, dst, algorithm = 'dfs') {
        if (algorithm === 'dfs') {
            let dfs = require('./DFS')
            return dfs(this, src, dst)
        } else if (algorithm == 'bfs') {
            let bfs = require('./BFS')
            return bfs(this, src, dst)
        }
    }
}

module.exports = Graph