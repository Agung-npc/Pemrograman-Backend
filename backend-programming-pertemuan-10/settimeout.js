console.log("Agung memesan makanan");

/* setTimeout bisa dibilang juga Asynchronous
 * setTimeout tidak mencegah operasi selanjutnya 
 */

setTimeout(() => {
    console.log("Pesanan sedang dibuat. . .");
    console.log("Pesanan sedang diantarkan. . .");
    console.log("Pesanan sudah sampai tujuan");
    console.log("Agung menikmati pesanannya.");
}, 6000);

console.log("Agung mengambil minuman.");