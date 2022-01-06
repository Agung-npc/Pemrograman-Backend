/* Membuat fungsi download
 * Promise dibuat menggunakan class Promise.
 * Promise menerima callback function/executor.
 * Executor menerima 2 params: resolve dan reject.
 * resolve dipanggil jika proses berhasil.
 * reject dipanggil jika proses gagal.
 */

function download() {
    return new Promise(function (resolve, reject) {
      const status = true;
  
      setTimeout(() => {
        if (status) {
          resolve("Download selesai");
        } else {
          reject("Download gagal");
        }
      }, 6000);
    });
  }
  
  download()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (result) {
      console.log(result);
    });