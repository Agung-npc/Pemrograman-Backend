/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

/* Impor Express */
const express = require ("express");

/* Membuat object atau server */
const app = express();

/* Menggunakan middleware */
app.use(express.json());

/* Mengimpor router */
const router = require("./routes/api");
app.use(router);

/* Mendefinisikan port */
app.listen(3000, function() {
    console.log("Server berjalan di : http://localhost:3000");
});