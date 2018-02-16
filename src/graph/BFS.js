var Queue = require('../collections/Queue')
var Graph = require('../graph/Graph')

function BFS(g, src, dst) {

    let visited = new Array(g.nodes_count()).fill(false)
    let paths = new Array(g.nodes_count()).fill([])
    var q = new Queue()
    paths[src.id].push(src)
    q.enqueue(src)
    
    while(!q.isEmpty()) {
        var u = q.dequeue();
        if (!visited[u.id]) {

            if (u == dst) {
                return paths[u.id]
            }

            visited[u.id] = true
            var edges = g.edges(u)

            for (var i=0; i<edges.length; i++) {
                var v = edges[i].other(u)
                q.enqueue(v)
                paths[v.id] = [...paths[u.id]]
                paths[v.id].push(v)
            }
        }
    }

    return []
}

module.exports = BFS