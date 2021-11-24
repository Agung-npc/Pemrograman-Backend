<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {

     /* FITUR REGISTER
     * Ambil input name, email dan password
     * Input datanya ke database menggunakan User Model
     */

     $input = [
         'name' => $request->name,
         'email' => $request->email,
         'password' => Hash::make($request->password)
     ];

     $user = User::create($input);

     $data = [
         'message' => 'Register is successfully'
     ];

     return response()->json($data, 200);

    }

    public function login(Request $request) {

    /* FITUR LOGIN
     * Ambil input email dan password dari user
     * Ambil input email dan password dari database berdasarkan email
     * Bandingkan data input user dan data dari database
     */

     $input = [
         'email' => $request->email,
         'password' => $request->password
     ];
     /* Menggunakan Auth attempt dan Auth user untuk mengambil data dan membuat token untuk user yang masuk */
     if (Auth::attempt($input)) {
        $token = Auth::user()->createToken( 'auth_token');

     $data = [
         'message' => 'Login successfully',
         'token' => $token->plainTextToken
     ];
        return response()->json($data, 200);
    }
    else {
        $data = [
            'message' => 'Login is invalid'
        ];

        return response()->json($data, 401);
    }

    }
    
}
