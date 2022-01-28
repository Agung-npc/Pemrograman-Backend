/* Mengimpor database */
const res = require("express/lib/response");
const db = require("../config/database");

/* Membuat class Student Models */
class Student {
    /* Method query semua data */
    static all() {
    return new Promise((resolve, reject) => {
    /* Membuat query ke database */
    const sql = "SELECT * FROM students";
    db.query(sql, function(error, results){
      resolve(results);
     });
    });
  }

/*
 * TODO 1: Buat fungsi untuk insert data
 * Method menerima parameter data yang akan dimasukkan
 * Method lalu mengembalikan data yang baru dimasukkan
 */

/* Menggunakan method async await untuk membuat promise */
static async create(data) {
  /* Method insert untuk menambahkan data baru */
  const dataStudent = await new Promise((resolve, reject) => {
  const sql = "INSERT INTO students SET ?";
    db.query(sql, data, (error, results) => {
    resolve(results.insertId);
    });
  });

  /* Return promise untuk mengembalikan data yang ditambahkan melalui id */
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM students WHERE id = ?";
    db.query(sql, dataStudent, (error, results) => {
    /* Hasil dataStudent dari Promise */
    resolve(results);
    });
  });
}

static find(id) {
  return new Promise((resolve, reject) => {
    /* Method query untuk menemukan data dengan id */
    const sql = "SELECT * FROM students WHERE id = ?";
    db.query(sql, id, (error, results) => {
      /* Mendestructing array */
      resolve(results[0]);
    });
  });
}

static async update(id,data){
  await new Promise((resolve, reject) => {
    const sql = "UPDATE students SET ? WHERE id = ?";
    db.query(sql, [data,id], (error, results) =>{
      resolve(results);
    });
  });

  return this.find(id);
}
  static delete(id) {
    return new Promise((resolve, reject) =>{
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (error, results)=>{
        resolve(results);
      });
    });
  }
}

/* Mengekspor class */
module.exports = Student;