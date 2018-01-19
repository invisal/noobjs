function parse_string(str) {
    str = str.trim().replace(/^[0]+/g, '');

    // calculate the size for our store
    let size = Math.ceil(str.length / 4);
    let store = new Array(size).fill(0);

    // read 4 digits per time
    for(let i = 0; i < size; i++) {
        store[i] = parseInt(str.substring(str.length - i * 4 - 4, str.length - i * 4));
    }

    return store;
}

module.exports = parse_string;