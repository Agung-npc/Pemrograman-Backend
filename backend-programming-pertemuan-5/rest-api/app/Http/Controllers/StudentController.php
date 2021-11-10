<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use GuzzleHttp\Psr7\Header;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students
        ];
        // mengembalikan data (json) dan kode 200
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {

        #Menambahkan data
        // echo "Menambahkan data";
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => "Student is created succesfully",
            'data' => $student
        ];
        
         // mengembalikan data (json) dan kode 201
        return response()->json($data, 201);
    }
}