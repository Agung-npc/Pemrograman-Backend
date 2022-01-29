// TODO 5: SETUP MODEL

const { query } = require ("express");

/* Mengimpor database */
const db = require("../config/database");

/* Membuat class Patient Models */
class Patient {
  /* Method query semua data */
  static all() {
  return new Promise((resolve, reject) => {
  /* Membuat query ke database */
  const sql = "SELECT * FROM patients";
  db.query(sql, function(error, results){
    resolve(results);
   });
  });
}

/* Menggunakan method async await untuk membuat promise */
static async create(data) {
  /* Method insert untuk menambahkan data baru */
  const id = await new Promise((resolve, reject) => {
  /* Membuat query ke database */
  const sql = "INSERT INTO patients SET ?";
    db.query(sql, data, (error, results) => {
    resolve(results.insertId);
    });
  });
    /* Return promise untuk mengembalikan data yang ditambahkan melalui id */
    const patient = await this.find(id);
    /* Hasil id dari Promise */
    return patient;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      /* Method query untuk menemukan data dengan id */
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (error, results) => {
        /* Mendestructing array */
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    /* Mengubah data pasien */
    await new Promise((resolve, reject) => {
      /* Method query untuk mengubah data */
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (error, results) => {
        resolve(results);
      });
    });
    /* Mengembalikan id pasien dengan promise */
    return this.find(id);
  }

  static delete(id) {
    /* Method query untuk mengubah data */
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static search(name) {
    /* Method query untuk menemukan nama pasien */
    return new Promise((resolve, reject) => {
      /* Mengambil data pasien menggunakan data nama pasien */
      const sql = `SELECT * FROM patients WHERE name LIKE "%${name}%"`;
      db.query(sql,name, (error, results) => {
        resolve(results);
      });
    });
  }

  static findByStatus(status) {
    /* Method query untuk menemukan data pasien berdasarkan statusnya */
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM PATIENTS WHERE status = ?";
      db.query(sql, status, (error, results) => {
        resolve(results);
      });
    });
  }
}

/* Mengekspor class */
module.exports = Patient;
