<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use GuzzleHttp\Psr7\Header;

class StudentController extends Controller
{
    # membuat method index
    public function index()
    {
         # menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students
        ];

         # mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }
    # membuat method store
    public function store(Request $request)
    {
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

    #Membuat method show untuk menampilkan data yang diminta
    public function show($id)
    {
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    #Membuat method update
    public function update(Request $request, $id)
    {
         
        // echo $request->nama;
        // echo $id;
        // <<Masukkan data yang ingin diupdate>>
        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];

            $student->update($input);

            $data = [
                'message' => 'Data is updated',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    #Membuat method destroy
    public function destroy($id) 
    {
        // Sama seperti sebelumnya, masukkan data yang ingin dihapus agar bisa dikonfirmasi
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'Student is deleted'
            ];

            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }
}