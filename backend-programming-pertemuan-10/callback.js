/* Fungsi untuk menjadikan format nama menjadi uppercase
 * parameter{string} name 
 */

    function formatName(nama) {
        const result = nama.toUpperCase();
        return result;
    }
    /* Menggunakan cara Arrow Function */
    /* const formatName = (name) => name.toUpperCase(); */

    function getName(nama, callformatName) {
        const result = callformatName(nama);
        console.log(result);
    } 
    /* Menggunakan cara Arrow Function */
    /* const getName = (name, callformatName) => console.log(callformatName(name)); */

    getName("Muhammad Agung Saputra", formatName);