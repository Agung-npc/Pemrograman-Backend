/* Mengimpor database */
const db = require("../config/database");

/* Membuat class Student Models */
class Student {
    /* Method query semua data */
    static all() {
    return new Promise((resolve, reject) => {
    /* Membuat query ke database */
    const sql = "SELECT * FROM students";
    db.query(sql, function(erroror, results){
      resolve(results);
     });
    });
  }

/*
 * TODO 1: Buat fungsi untuk insert data
 * Method menerima parameter data yang akan dimasukkan
 * Method lalu mengembalikan data yang baru dimasukkan
 */

static async create(data) {
    /* Method insert untuk menambahkan data baru */
    const insert = await new Promise((resolve, reject) => {
    const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (error, results) => {
        if (error) {
        reject(error);
        }
        resolve(results.insertID);
      });
    });
 }

}

/* Mengekspor class */
module.exports = Student;