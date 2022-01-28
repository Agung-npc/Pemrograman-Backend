/* TODO 3: Import data students dari folder data/students.js 
   const students = require ("../data/students.js");
 */

/* Mengimpor StudentModels */
const students = require("../data/students");
const Student = require("../models/StudentModels")

/* Membuat class StudentController */
class StudentController {
  /* Menggunakan method async dan await untuk memanggil method static */
    async index(req, res) {
    
        const students = await Student.all();
        /* TODO 4: Tampilkan data students */
        const data = {
          message : "Menampilkan semua data students",
          data : students,
        };
    
        res.json(data);
}

/* TODO 2 : Memanggil method create
 * Method mengembalikan data yang baru dimasukan
 * Mengembalikan response dalam bentuk json
 */

    /* Membuat method async store */
      async store(req, res) {

    /* Menambahkan variable data untuk store */
      const {nama, nim, email, jurusan} = req.body;
      const dataStudent = {nama: nama, nim:nim, email:email, jurusan:jurusan};
    /* Menggunakan method await untuk membuat data baru */
      const students = await Student.create(req.body);
        /* TODO 5: Tambahkan data students */
        /* Menambahkan data students */
        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: students,
        };

      res.json(data);
    }

    update(req, res) {
    /* Destructing object */
      const { id } = req.params;
      const{ nama } = req.body;
      /* TODO 6: Update data students*/
      /* Mengubah data students */
      students[id] = nama;
      const data = {
          message: `Mengubah data student id ${id}, nama ${nama}`,
          data: students,
      };
      res.json(data);
    }

    destroy(req, res) {
    /* Destructing object */
      const { id } = req.params;
      /* TODO 7: Hapus data students */
      /* Menghapus data students */
      students.splice(id, 1);
      const data = {
          message : `Menghapus data student id ${id}`,
          data: students,
      };

      res.json(data);
    }
}

/* Membuat object Student Controller */
const object = new StudentController();

/* Mengekspor object Student Controller */
module.exports = object;