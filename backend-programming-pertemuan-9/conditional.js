/* Membuat Conditional */
const nilai = 80;
let grade = "";

if (nilai >80) {
    grade = "A";
}
else if (nilai >70) {
    grade = "B";
}
else {
    grade = "C";
}

console.log(`Nilai Anda: ${grade}`);

 /* Short conditional menggunakan ternary operator ? dan :
 * ? digunakan untuk melambangkan kondisi 'if'
 * : digunakan untung melambangkan kondisi 'else'
 * Digunakan untuk menjalankan aksi tertentu bergantung dengan nilai atau kondisi tertentu 
 */
const age = 19;

if (age >21) {
    console.log("Sudah Dewasa");
}
else {
    console.log("Belum Dewasa");
}

const hasil = age > 21 ? "Dewasa" : "Belum";

console.log(hasil);