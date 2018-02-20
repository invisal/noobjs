var Queue = require('../collections/Queue')
var Graph = require('../graph/Graph')
var Stack = require('../collections/Stack')

function BFS(g, src, dst) {

    let visited = new Array(g.nodes_count()).fill(false)
    let parents = new Array(g.nodes_count()).fill(null)
    parents[src.id] = null;
    
    var q = new Queue()
    q.enqueue(src)
    
    while(!q.isEmpty()) {
        var u = q.dequeue();
        if (!visited[u.id]) {
            
            if (u == dst) {
                return getPath(u, parents)
            }

            visited[u.id] = true
            var edges = g.edges(u)
            for (var i=0; i<edges.length; i++) {
                var v = edges[i].other(u)
                if (parents[u.id] == v) continue
                q.enqueue(v)
                parents[v.id] = u
            }
        }
    }

    return []
}

function getPath(u, parents) {

    let stack = new Stack();
    stack.push(u);

    // Loop from the current node to the last parent
    let currentNode = parents[u.id]
    while(currentNode != null) {
        stack.push(currentNode)
        currentNode = parents[currentNode.id]
    }

    // Convert Stack into Array
    var arr = []
    while(!stack.isEmpty()) {
        arr.push(stack.pop())
    }
    return arr
    
}

module.exports = BFS