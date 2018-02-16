function HashPriorityQueue(cmp = null)
{

    // private members
    var heap = [ false ];
    var hash = { };
    
    // constructor
    if (cmp === null) cmp = (a, b) => a < b;

    // private methods
    function swap(a, b) 
    {
        let t = heap[a];
        heap[a] = heap[b];
        heap[b] = t;

        // Swap index as well
        t = heap[a].index;
        heap[a].index = heap[b].index;
        heap[b].index = t;
    }

    function shift_up(index) {
        if (index < 2) return;  // there is no parent left
        
        let parent = index >> 1;
        if (cmp(heap[index].value, heap[parent].value)) {
            swap(index, parent);
            shift_up(parent);
        }
    }

    function shift_down(index) {
        let child = index * 2;

        if (child >= heap.length) return;
        if (child + 2 <= heap.length && cmp(heap[child + 1].value, heap[child].value)) 
            child = child + 1;
        
        if (cmp(heap[child].value, heap[index].value)) {
            swap(index, child);
            shift_down(child);
        }
    }

    // public methods
    this.push = function(key, value) 
    {
        if (hash.hasOwnProperty(key)) throw 'Already have this key';

        let index = heap.length;
        let obj = { key, value, index };

        heap.push(obj);
        hash[key] = obj;

        shift_up(index);
    }

    this.pop = function()
    {
        if (heap.length === 1) return false;
        if (heap.length === 2) {
            let t = heap.pop();
            return [t.key, t.value];
        }

        let t = heap[1];
        swap(1, heap.length - 1);
        heap.pop();
        delete hash[t.key];
        
        shift_down(1);
        return [t.key, t.value];
    }

    this.get = function(key) {
        if (!hash.hasOwnProperty(key)) throw 'Key is not found';
        let obj = hash[key];
        return [ obj.key, obj.value ];
    }

    this.top = function() {
        return [heap[1].key, heap[1].value];
    }

    this.contain = function(key) {
        return hash.hasOwnProperty(key);
    }

    this.change = function(key, value) {
        if (!hash.hasOwnProperty(key)) throw 'Key is not found';

        let obj = hash[key];
        let old = obj.value;
        obj.value = value;

        if (cmp(value, old)) shift_up(obj.index);
        else shift_down(obj.index);
    }

    this.size = function() { return heap.length - 1; }
}

module.exports = HashPriorityQueue;