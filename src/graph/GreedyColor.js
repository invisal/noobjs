function GreedyColor(g) {
  let nodes = [...g.nodes()];
  
  // Sorting the nodes with the largest number of edges first
  nodes.sort((a, b) => { 
    return g.edges(b).length - g.edges(a).length;
  });

  // Turn all the color to null
  for(let i = 0; i < nodes.length; i++) {
    nodes[i].color = -1;
  }

  // Greedy coloring
  let max_color = 1;
  let mex = [ false, false ];
  for(let i = 0; i < nodes.length; i++) {
    // reset the mex (Minimum excludant)
    for(let j = 0; j <= max_color; j++) mex[j] = false;

    // Mark color that has been used
    let adj = g.adj(nodes[i]);
    for(let j = 0; j < adj.length; j++) {
      if (adj[j].color >= 0) mex[adj[j].color] = true;
    }

    // Find the unused minimum color and color it
    let min = 0;
    for(;min <= max_color; min++) {
      if (mex[min] === false) break;
    }

    nodes[i].color = min;
    if (min === max_color) {
      max_color++;
      mex.push(false);
    }
  }

  return max_color;
}

module.exports = GreedyColor;