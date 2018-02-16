class DisjointSet
{

    constructor(n)
    {
        this._id = new Array(n);
        this._size = new Array(1);
        this._count = n;
        for(let i = 0; i < n; i++) this._id[i] = i;
    }

    find(p)
    {
        if (p !== this._id[p]) 
            p = this.find(this._id[p]);
        return p;
    }

    union(p, q)
    {
        let i = this.find(p);
        let j = this.find(q);
        if (i === j) return;

        if (this._size[i] < this._size[j]) {
            this._id[i] = j; 
            this._size[j] += this._size[i];
        } else {
            this._id[j] = i;
            this._size[i] += this._size[j];
        }

        this._count--;
    }

    connected(p, q)
    {
        return this.find(p) === this.find(q);
    }

    count()
    {
        return this._count;
    }

}

module.exports = DisjointSet