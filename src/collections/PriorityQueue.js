function PriorityQueue(cmp = null)
{

    // private members
    var store = [ false ];

    // constructor
    if (cmp === null) {
        cmp = (a, b) => a < b;
    }

    // methods
    this.push = function(value) {
        var i = store.length;
        store.push(value);

        // moving up
        var parent;
        do {
            parent = i >> 1;
            if (cmp(store[i], store[parent])) {
                // swap
                var tmp = store[i];
                store[i] = store[parent];
                store[parent] = tmp;
                i = parent;
            } else break;
        } while( parent > 0 )
    }

    this.pop = function() {
        if (store.length === 1) return false;
        if (store.length === 2) return store.pop();

        var r = store[1];

        // swap the last element to the top
        store[1] = store.pop();
        
        // move the top down if there is better child
        var parent = 1;
        var child;
        var size = store.length - 1;

        do {
            // left child
            child = parent * 2; 

            // this node does not have any child
            if (child > size) break;

            // if right child is lesser than left child
            if (child + 1 <= size && cmp(store[child + 1], store[child])) child++;

            if ( cmp(store[child], store[parent]) ) {
                var tmp = store[child];
                store[child] = store[parent];
                store[parent] = tmp;
            }

            parent = child;
        } while(true)

        return r;
    }

    this.top = function() {
        if (store.length === 1) return false;
        return store[1];
    }

    this.size = function() {
        return store.length - 1;
    }
}

module.exports = PriorityQueue