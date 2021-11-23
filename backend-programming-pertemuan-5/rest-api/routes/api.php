<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*import animal controller*/
use App\Http\Controllers\AnimalController;
/*import student controller*/
use App\Http\Controllers\StudentController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*ROUTING UNTUK ANIMALS*/

/* method get endpoint animals */
Route::get("/animals", [AnimalController::class, 'index']);

/* method post endpoint animals */
Route::post("/animals", [AnimalController::class, 'store']);

/* method put untuk mengedit */
Route::put("/animals/{id}", [AnimalController::class, 'update']);

/* method delete untuk menghapus */
Route::delete("/animals/{id}", [AnimalController::class, 'destroy']);

/*ROUTING UNTUK STUDENTS*/

/* method get endpoint students */
Route::get('/students', [StudentController::class, 'index']);

/* method post endpoint students */
Route::post('/students', [StudentController::class, 'store']);