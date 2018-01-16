function KNeighborsVoting(weights = 'uniform') {

    // public methods
    this.get = function(y, dist_list) {
        let counter = [];
        let index = y[0];

        counter[index] = { dist: dist_list[0], total: 1 };
        for(let i = 1; i < y.length; i++) {
            let cls = y[i];
            let dist = dist_list[i];

            if (typeof counter[cls] === 'undefined')
                counter[cls] = { total: 0, dist: Infinity };
                
            let current = counter[cls];
            let best = counter[index];

            current.total++;
            current.dist = Math.min(current.dist, dist);

            if (current.total > best.total) index = cls;
            else if (current.total === best.total && current.dist < best.dist) {
                index = cls;
            }
        }

        return index;
    }

}

module.exports = KNeighborsVoting;