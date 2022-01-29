// TODO 3: SETUP CONFIG DATABASE

/* Mengimpor mysql */
const mysql = require("mysql");
/* Mengimpor dotenv lalu menjalankan config */
require("dotenv").config();

/* Destructing object pemrosesan .env */
const { DB_HOST,  DB_USER,  DB_PASSWORD,  DB_DATABASE }= process.env;

/* Membuat koneksi createConnection */
const db = mysql.createConnection({
    /* Mengupdate konfigurasi dari file .env */
    /* Host, User, Password dan Database */
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

/* Membuat koneksi ke database */
db.connect(function(error) {
    if (error) {
        console.log("Koneksi error" + error);
        return;
    }   else {
        console.log("Koneksi berhasil");
    }
});

/* Mengekspor database */
module.exports = db;
