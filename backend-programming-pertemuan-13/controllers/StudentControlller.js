/* TODO 3: Import data students dari folder data/students.js 
   const students = require ("../data/students.js");
 */

/* Mengimpor StudentModels */
const res = require("express/lib/response");
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
    
        res.status(200).json(data);
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

      res.status(201).json(data);
    }
    /* Membuat method async update */
    async update(req, res) {
    /* Destructing object */
      const { id } = req.params;
      
      /* Mengecek data student apakah ada atau tidak */
      const student = await Student.find(id);

      if (student) {
      /* TODO 6: Update data students*/
      /* Mengubah data students */
      const studentUpdated = await Student.update(id, req.body);
      const data = {
          message: "Data student telah berhasil diubah",
          data: studentUpdated,
      };

      res.status(200).json(data);
        /* Jika data student ditemukan, ubah data */
      } else {
        /* Jika data student tidak ditemukan, tampilkan pesan tidak ada */
        const data = {
          message: "Data student tidak ditemukan",
        };
        /* Mengirim kode status 404 tidak ditemukan */
        res.status(404).json(data);
      } 
    }

    /* Membuat method async destroy */
     async destroy(req, res) {
     /* Destructing object */
      const { id } = req.params;
      /* Mengecek data student apakah ada atau tidak */
      const student = await Student.find(id);
      /* TODO 7: Hapus data students */
      /* Menghapus data students */
      /* Jika data student ditemukan, hapus data */
      if (student) {
        await Student.delete(id);

        const data = {
          message: "Data student telah dihapus",
        };
      /* Jika data student tidak ditemukan, tampilkan pesan tidak ada */
      } else {
        const data = {
         message: "Data student tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }
      /* Membuat method async show */
      async show(req, res) {
      /* Mengecek data student apakah ada atau tidak */
      const {id} = req.params;
      const student = await Student.find(id);
      

      if (student) {
        const data = {
          message : "Menampilkan data student",
          data: student,
        };

        res.status(200).json(data);
      }
      else {
        const data = {
          message: "Data student tidak ditemukan",
        };
         /* Mengirim kode status 404 tidak ditemukan */
        res.status(404).json(data);
      }
    }
}

/* Membuat object Student Controller */
const object = new StudentController();

/* Mengekspor object Student Controller */
module.exports = object;