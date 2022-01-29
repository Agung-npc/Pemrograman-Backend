// TODO 2: SETUP ROUTING (ROUTER)

/* Mengimpor express */
const express = require("express");
/* impor Patient Controller */
const PatientController = require("../controllers/PatientController");

/* Membuat routing modular */
const router = express.Router();


/* ROUTING UNTUK Patient */

/* Menampilkan data Patient */
router.get("/patients", PatientController.index);
/* Menambahkan data Patient */
router.post("/patients", PatientController.store);
/* Mengubah data Patient */
router.put("/patients/:id", PatientController.update);
/* Menghapus data Patient */
router.delete("/patients/:id", PatientController.destroy);
/* Membuat routing untuk menampilkan satu data pasien */
router.get("/patients/:id", PatientController.show);
/* Membuat routing untuk menampilkan data pasien melalui nama */
router.get("/patients/search/:name", PatientController.search);
/* Membuat routing untuk menampilkan data - data pasien yang memiliki status positif */
router.get("/patients/status/positive", PatientController.positive);
/* Membuat routing untuk menampilkan data - data pasien yang memiliki status sembuh */
router.get("/patients/status/recovered", PatientController.recovered);
/* Membuat routing untuk menampilkan data - data pasien yang memiliki status meninggal dunia */
router.get("/patients/status/dead", PatientController.dead);


/* Ekpor router */
module.exports = router;