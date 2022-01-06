/* Membuat variable user dengan const
 * Membuat object menggunakan {}
 * Membuat object literal*/
const user = {
    nama : "Muhammad Agung Saputra",
    age : 20,
    address : "Bogor",
};

/* Melakukan destructing object
 * Mengekstraks variable user dengan kode satu baris */
const {nama,age,address} = user;

/* Mengakses property object menggunakan dot atau bracket */
console.log(nama, address);