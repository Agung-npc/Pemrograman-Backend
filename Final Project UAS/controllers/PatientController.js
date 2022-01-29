// TODO 4: SETUP CONTROLLER

/* Mengimpor PatientModels */
const Patient = require("../models/PatientModels");

/* Membuat class PatientController */
class PatientController {
  /* Menggunakan method async dan await untuk memanggil method static */
   /**
     * Menampilkan semua data pasien
     *  @param {object} @req
     *  @param {object} @res
     */
async index(req, res) {

    const Patients = await Patient.all();
    
    /* Refactor */
    /* Jika data pasien lebih dari 0 maka munculkan data */
    if (Patients.length > 0) {
      const data = {
        message: "Menampilkan semua data pasien",
        data: Patients,
      };

      return res.status(200).json(data);
      /* Jika data pasien tidak ditemukan, tampilkan pesan data pasien kosong */
    } else {
      const data = {
        message: "Data pasien kosong",
      };
      /* Mengirim kode status 200 karena data pasien kosong */
      return res.status(200).json(data);
    }
  }

  /* Membuat method async destroy */
async store(req, res) {
    /* Validation */
    /* Menambahkan variable data untuk store */
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;
    /* const untuk data harus diisi, jika tidak tampilkan pesan */
    if ( !name || !phone || !address || !status || !in_date_at || !out_date_at) {
      res.send ("Data pasien harus diisi dengan lengkap");
    }
    /* Nomor telepon harus diisi dengan angka, jika tidak munculkan pesan */
    else if (isNaN(phone)) {
      res.send("Nomor telepon harus berupa angka");
    } else {
      const patient = await Patient.create(req.body);

      const data = {
        message: `Menambahkan data pasien: ${name}`,
        data: patient,
      };
      /* Mengirim kode status 201 jika data pasien berhasil ditambahkan */
       res.status(201).json(data);
    }
    
  }

   /* Membuat method async update */
   /**
     * Mengubah isi data pasien
     *  @param {object} @req
     *  @param {object} @res
     */
async update(req, res) {
    /* Destructing object */
     const { id } = req.params;
    /* Mengecek data pasien apakah ada atau tidak */
     const patient = await Patient.find(id);

    /* Jika data pasien ditemukan, ubah data */
    if (patient) {
      /* Mengubah data pasien */
      const patientUpdated = await Patient.update(id, req.body);
      const data = {
        message: "Data pasien telah berhasil diubah",
        data: patientUpdated,
      };
      res.status(200).json(data);
    } else {
      /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }
  
  /* Membuat method async destroy */
   /**
     * Menghapus isi data pasien
     *  @param {object} @req
     *  @param {object} @res
     */
async destroy(req, res) {
    /* Destructing object */
    const { id } = req.params;
    /* Mengecek data pasien apakah ada atau tidak */
    const patient = await Patient.find(id);
    /* Menghapus data pasien */
    /* Jika data pasien ditemukan, hapus data */
    if (patient) {
      await Patient.delete(id);

      const data = {
        message: "Data pasien telah dihapus",
      };
      res.status(200).json(data);
    } else {
      /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }

  /* Membuat method async show */
  /**
     * Menampikan isi data pasien melalui id
     *  @param {object} @req
     *  @param {object} @res
     */
async show(req, res) {
    /* Destructing object */
    const { id } = req.params;

    /* Mengecek data student apakah ada atau tidak */
    const patient = await Patient.find(id);
    /* Jika data ada, munculkan data pasien */
    if (patient) {
      const data = {
        message: "Menampilkan data pasien",
        data: patient,
      };
      res.status(200).json(data);
    } else {
      /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }
  
   /* Membuat method async search */
   /**
     * Menampilkan semua data pasien menggunakan nama
     *  @param {string} @req
     *  @param {object} @res
     */
async search(req, res) {
  /* Destructing string */
    const { name } = req.params;
  /* Mengecek data student apakah ada atau tidak menggunakan method pencarian nama */
    const patient = await Patient.search(name);
    /*Refactoring*/
    /* Jika data pasien lebih dari 0 maka munculkan data */
    if (patient.length > 0) {
      const data = {
        message: "Menampilkan data pasien",
        data: patient,
      };
      res.status(200).json(data);
    } else {
      /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }

  /* Membuat method async positif */
async positive(req, res) {
    const positif = "Positif";
    /* Mengecek data student apakah ada atau tidak menggunakan method pencarian status positif */
    const patient = await Patient.findByStatus(positif);

    /*Refactoring*/
    /* Jika data pasien lebih dari 0 maka munculkan data */
    if (patient.length > 0) {
      const data = {
        message: "Menampilkan data pasien positif covid-19",
        data: patient,
      };
      res.status(200).json(data);
    } else {
       /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }

  /* Membuat method async recovered */
async recovered(req, res) {
    const recovered = "Recovered";
    /* Mengecek data student apakah ada atau tidak menggunakan method pencarian status sembuh */
    const patient = await Patient.findByStatus(recovered);

    /*Refactoring*/
    /* Jika data pasien lebih dari 0 maka munculkan data */
    if (patient.length > 0) {
      const data = {
        message: "Menampilkan data pasien sembuh covid-19",
        data: patient,
      };
      res.status(200).json(data);
    } else {
       /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }

  /* Membuat method async recovered */
async dead(req, res) {
    const dead = "Dead";
    /* Mengecek data student apakah ada atau tidak menggunakan method pencarian status meninggal */
    const patient = await Patient.findByStatus(dead);

    /*Refactoring*/
    /* Jika data pasien lebih dari 0 maka munculkan data */
    if (patient.length > 0) {
      const data = {
        message: "Menampilkan data pasien yang meninggal akibat covid-19",
        data: patient,
      };
      res.status(200).json(data);
    } else {
      /* Jika data pasien tidak ditemukan, tampilkan pesan tidak ada */
      const data = {
        message: "Data pasien tidak ditemukan",
      };
      /* Mengirim kode status 404 tidak ditemukan */
      res.status(404).json(data);
    }
  }
}

/* Membuat object Student Controller */
const object = new PatientController();

/* Mengekspor object Student Controller */
module.exports = object;
