/* Membuat fungsi menghitung luas lingkaran
 * Fungsi dibuat dengan Function Declaration
 */

/* Function declaration 
 * @parameter {number} jari-jari lingkaran 
 * @returns {number} hasil luas lingkaran*/

/*function hitungLuas(jari) {
 const hasil = 3.14 * jari * jari;

    return hasil; //Memanggil hasilnya
} */

/* Function expression */
const hitungLuas = function (jari) {
    const hasil = 3.14 * jari * jari; 

/* Arrow Function */
/* const hitungLuas =  (jari) => 3.14 * jari * jari; */ /* Fungsi harus dituliskan satu baris agar bisa berjalan */

    return hasil;
}

/* Memanggil fungsi untuk mengirimkan parameter dari lingkaran */
console.log(hitungLuas(10));
console.log(hitungLuas(11));