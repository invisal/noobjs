class GraphEdge {
    constructor(id, u, v, cost) {
        this.id = id
        this.u = u
        this.v = v
        this.cost = cost
    }
    other(u) {
        if (u == this.u) {
            return this.v
        }
        return this.u
    }
}

module.exports = GraphEdge