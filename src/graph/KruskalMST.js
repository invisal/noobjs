var DisjointSet = require('../collections/DisjointSet');

function KruskalMST(g)
{
    // Sorting all the edges
    let edges = g.edges();
    let set = new DisjointSet(g.nodes_count());
    edges.sort( (a, b) => a.cost > b.cost );

    let result = [];
    for(let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        
        // if it is connected already, skip
        if (set.connected(edge.u.id, edge.v.id)) continue;
        
        // connect the node together
        set.union(edge.u.id, edge.v.id);
        result.push(edge);
        if (result.length >= g.nodes_count()) break;
    }

    return result;
}

module.exports = KruskalMST;