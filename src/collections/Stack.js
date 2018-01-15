"use strict";

function Stack() {

    // private members
    var store = [];

    // methods
    this.push = function(v) {
        store.push(v);
    };

    this.pop = function() {
        return store.pop();
    };

    this.top = function() {
        return store[store.length - 1];
    };

    this.size = function() {
        return store.length;
    };

}

module.exports = Stack;