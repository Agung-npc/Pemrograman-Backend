<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        
        /* Membuat Validasi data */

        $request->validate([
            'nama' => "required",
            'nim' => "required|numeric",
            'email' => "required|email",
            'jurusan' => "required",
        ]);

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student = Student::create($input);

        $data = [
            'message' => "Student is created",
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

        /* Membuat Method Show untuk menampilkan data*/
        public function show($id)
        {
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];
            
        /* Jika data tidak ada */
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data not found',
            ];

            return response()->json($data, 404);
        }
    }

        /* Membuat Method Update untuk data */
        public function update(Request $request, $id)
        {

        /* Tutorial mengupdate data
         * Cari data yang ingin diupdate
         * Jika ada tinggal mengubah datanya saja
         * Jika tidak, maka akan keluar pesan 'Data not found'
        */

        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];

            $student->update($input);

            $data = [
                'message' => 'Data is updated',
                'data' => $student,
            ];
        /* Jika data tidak ada */
            return response()->json($data, 200);
            } else {
            $data = [
                'message' => 'Data not found',
            ];

            return response()->json($data, 404);
        }
    }

        /* Membuat Method Destroy */
        public function destroy($id)
        {
        /* CARI ID
         * Cari data yang ingin dihapus
         * Jika tidak ada maka akan keluar pesan 'Data not found'
        */
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'Data is deleted',
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data not found',
            ];

            return response()->json($data, 404);
        }
    }
}