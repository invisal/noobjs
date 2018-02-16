var Stack = require('../collections/Stack')

function DFS(g, src, dst) {

    let visited = new Array(g.nodes_count()).fill(false)
    let stack = new Stack();

    function search(g, u) {
        if (dst == u) {
            return true;
        }
        visited[u.id] = true;
        let edges = g.edges(u);
        for (var i=0; i<edges.length; i++) {
            let v = edges[i].other(u);
            if (!visited[v.id]) {
                if (search(g, v)) {
                    stack.push(v);
                    return true;
                }
            }
        }
        return false;
    }

    var res = search(g, src)
    if (!res) {
        return [];
    }

    stack.push(src)
    let array = []
    while(!stack.isEmpty()) {
        array.push(stack.pop())
    }
    return array;

}

module.exports = DFS

