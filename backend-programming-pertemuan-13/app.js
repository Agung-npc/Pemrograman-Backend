/* Import Express */
const express = require ("express")

/* Membuat object atau server */
const app = express();

/* Mendefinisikan port */
app.listen(3000, function() {
    console.log("Server berjalan di : http://localhost:3000");
});

/* Mendefinisikan routing */
app.get("/", function (req,res) {
    res.send("Hello World");
});

/* Mengimport router */
const router = require("./routes/api");
app.use(express.json());
app.use(router);