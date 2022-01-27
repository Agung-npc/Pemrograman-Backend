// TODO 3: Import data students dari folder data/students.js
/* Mengimpor data Students.js */
const students = require("../data/students");

/* Membuat class StudentController */
class StudentController {
    index(req, res) {
        /* TODO 4: Tampilkan data students */
        const data = {
            message: "Menampilkan semua data students",
            data: students,
            
        }
      res.json(data);
    }

    store(req, res) {
        const {nama} = req.body;
        /* TODO 5: Tambahkan data students */
        students.push(nama);
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

      /* TODO 6: Update data students */
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

/* Mengekspor Controller */
module.exports = object;