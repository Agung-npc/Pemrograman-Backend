/* Mengimpor express */
const express = require("express");
/* impor Student Controller */
const StudentController = require("../controllers/StudentControlller");

/* Membuat routing modular */
const router = express.Router();


/* ROUTING UNTUK STUDENT */

/* Menampilkan data student */
router.get("/students", StudentController.index);
/* Menambahkan data student */
router.post("/students", StudentController.store);
/* Mengubah data student */
router.put("/students/:id", StudentController.update);
/* Menghapus data student */
router.delete("/students/:id", StudentController.destroy);


/* Ekpor router */
module.exports = router;