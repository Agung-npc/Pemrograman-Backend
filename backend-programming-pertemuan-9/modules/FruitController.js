/* Mengimport fruits dari data.js */
const fruits = require("./data.js");
 

function index() {
    for(const fruit of fruits) {
        console.log(fruit);
    }
}

/* index(); */

function store(name) {
    fruits.push(name);
    index();
}

module.exports = { index, store };
/* Jika mengeksport menggunakan es6 atau package json */
//export { index, store };