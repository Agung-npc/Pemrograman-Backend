/* Mengimport menggunakan method destructing dari FruitController */
const { index, store} = require("./Controllers/FruitController.js");

/* Mengimport menggunakan es6 atau package json */
//import { index, store } from "./FruitController.js";

const main = () => {
    index();
    store("Jeruk");
}

main();