var HashPriorityQueue = require('./../collections/HashPriorityQueue');

function PrimMST(g)
{
    let edges = new Array(g.nodes_count()).fill(false);;
    let dist =  new Array(g.nodes_count()).fill(Infinity);
    let visited = new Array(g.nodes_count()).fill(false);
    let nodes = g.nodes();
    let pq = new HashPriorityQueue();

    function visit(v) {
        visited[v.id] = true;
        let e = g.edges(v);

        for(let i = 0; i < e.length; i++) {
            let w = e[i].other(v);
            if (visited[w.id]) continue;

            if (e[i].cost < dist[w.id]) {
                dist[w.id] = e[i].cost;
                edges[w.id] = e[i];

                if (pq.contain(w.id)) pq.change(w.id, e[i].cost);
                else pq.push(w.id, e[i].cost);
            }
        }
    }

    pq.push(0, 0);
    dist[0] = 0;

    while(pq.size() > 0)
        visit(nodes[pq.pop()[0]]);

    return edges.filter((x) => x !== false);
}

module.exports = PrimMST;