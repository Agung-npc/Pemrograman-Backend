<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

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

// METHOD GET
Route::get("/animals", [AnimalController::class, 'index']);

// METHOD POST
Route::post("/animals", [AnimalController::class, 'store']);

// METHOD PUT
Route::put("/animals/{id}", [AnimalController::class, 'update']);

// METHOD DELETE
Route::delete("/animals/{id}", [AnimalController::class, 'destroy']);