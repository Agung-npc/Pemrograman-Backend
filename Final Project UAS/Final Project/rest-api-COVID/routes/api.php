<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/* Import data pasien */
use App\Http\Controllers\PatientController;
/* Import data login dan register */
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
}); 
 /* Jika ingin menambahkan authentication pada database maka tanda '});' diletakkan dibawah
 * Letakkan pada route yang ingin diberi izin authentication
 */


/* ROUTING UNTUK PATIENTS COVID */


/* Method Get untuk mendapatkan data pasien Covid-19 */
Route::get('/patients', [PatientController::class, 'index']);

/* Method Store untuk menyimpan data pasien ke dalam database */
Route::post('/patients', [PatientController::class, 'store']);

/* Method Show untuk menampilkan data pasien yang lebih detail */
Route::get('/patients/{id}', [PatientController::class, 'show']);

/* Method Put untuk mengedit atau mengubah data pasien */
Route::put('/patients/{id}', [PatientController::class, 'update']);

/* Method Delete untuk menghapus data pasien yang diinginkan */
Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

/* Method Search untuk mencari data pasien */
Route::get('/patients/search/{name}', [PatientController::class, 'search']);

/* Method Get untuk mendapatkan data pasien Covid-19 yang berstatus positif */
Route::get('/patients/status/positif', [PatientController::class, 'positif']);

/* Method Get untuk mendapatkan data pasien Covid-19 yang masih dalam tahap penyembuhan */
Route::get('/patients/status/recovered', [PatientController::class, 'recovered']);

/* Method Get untuk mendapatkan data pasien Covid-19 yang berstatus meninggal dunia */
Route::get('/patients/status/dead', [PatientController::class, 'dead']);


/* Endpoint Register dan Login */
Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);