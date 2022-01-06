/* Membuat Array 
 * Array untuk nama buah menggunakan for*/

/* Membuat variable array menggunakan const */
const fruits = ["Pisang", "Mangga", "Salak"];

/* Mengakses element array menggunakan index */
console.log(fruits[0], fruits[1]);
console.log(fruits[1], fruits[2]);
console.log(fruits[0], fruits[2]);

/* Looping array menggunakan for */
for (const fruit of fruits) {
  console.log(`${fruit}`);
}