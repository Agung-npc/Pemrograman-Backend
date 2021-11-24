<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /* Membuat function index untuk data pasien */
    public function index()
    {
        
    $patients = Patient::all();
    
    /* Jika data pasien tidak kosong, fungsi dibawah akan dijalankan */
    if ($patients->isNotEmpty()) {
        $data = [
        'message' => 'Get All Resource', 
        'total' => count($patients), /* Berguna untuk menampilkan total data pasien */
        'data' => $patients, /* Menampilkan data pasien */
        ];

        return response()->json($data, 200);
        } 
    /* Jika data pasien kosong, maka akan menjalankan kode dibawah */
        else {
        $data = [
        'message' => 'Data is Empty', /* Pesan jika data kosong */
        ];

        return response()->json($data, 200);
        }
    }

    /* Membuat function store untuk menambahkan data pasien */
    public function store(Request $request)
    {
        /* Validasi data */
        $validateData = $request->validate([
            'name'   =>  "required",
            'phone'  =>  "required|numeric",
            'address'=>  "required",
            'status' =>  "required",
            'in_date_at' =>  "required",
            'out_date_at' => "required",
            /*
            Untuk required itu wajib dimasukkan
            Untuk yang numeric itu berarti data yang dimasukkan harus berupa nomor
            */
        ]);

        $patient = Patient::create($validateData);

        $data = [
            'message' => "Resource is Added Successfully", /* Pesan yang muncul jika data berhasil ditambahkan */
            'data' => $patient,
        ];

        return response()->json($data, 201);
    }

    /* Membuat function show untuk menampilkan data */
    public function show($id)
    {
        /* Menampilkan detail data pasien */
        $patient = Patient::find($id);

        if ($patient) {
            $data = [
                'message' => 'Get Detail Resource', /* Pesan yang muncul jika data ditemukan */
                'data' => $patient,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource Not Found', /* Pesan jika data kosong */
            ];

            return response()->json($data, 404);
        }
    }

    /* Membuat Method update untuk menambahkan data pasien */
    public function update(Request $request, $id)
    {
        $patient = Patient::find($id);

        if ($patient) {
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patient->out_date_at,
            ];

            $patient->update($input);

            $data = [
                'message' => 'Resource is Update Successfully', /* Pesan yang muncul jika data berhasil diubah */
                'data' => $patient,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource Not Found', /* Pesan jika data kosong */
            ];

            return response()->json($data, 404);
        }
    }

    /* Membuat Method destroy untuk menghapus data pasien */
    public function destroy($id)
    {
        $patient = Patient::find($id);

        if ($patient) {
            $patient->delete();

            $data = [
                'message' => 'Resource is Delete Successfully', /* Pesan yang muncul jika data berhasil dihapus */
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource Not Found', /* Pesan jika data kosong */
            ];

            return response()->json($data, 404);
        }
    }

    /* Membuat Method search untuk mencari data pasien */
    public function search($name)
    {
        $patient = Patient::where('name', 'LIKE', '%' . $name . '%')->get();

        if ($patient->isNotEmpty()) {
            $data = [
                'message' => 'Get Searched Resource', /* Pesan yang muncul jika pencarian berhasil */
                'total' => count($patient), /* Menampilkan total data pasien yang ada */
                'data' => $patient,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource Not Found', /* Pesan jika data kosong */
            ];

            return response()->json($data, 404);
        }
    }

    /* Membuat Method untuk mencari data pasien yang positif */
    public function positif()
    {
        $patient = Patient::where("status", "positif")->get();

        $data = [
            'message' => 'Get Positif Resource', /* Pesan yang muncul jika pencarian berhasil */
            'total' => count($patient),
            'data' => $patient,
        ];

        return response()->json($data, 200);
    }

    /* Membuat Method untuk mencari data pasien yang dalam masa pemulihan */
    public function recovered()
    {
        $patient = Patient::where("status", "recovered")->get();

        $data = [
            'message' => 'Get Recovered Resource', /* Pesan yang muncul jika pencarian berhasil */
            'total' => count($patient),
            'data' => $patient,
        ];

        return response()->json($data, 200);
    }

    /* Membuat Method untuk mencari data pasien yang meninggal dunia */
    public function dead()
    {
        $patient = Patient::where("status", "dead")->get();

        $data = [
            'message' => 'Get Dead Resource', /* Pesan yang muncul jika pencarian berhasil */
            'total' => count($patient),
            'data' => $patient,
        ];

        return response()->json($data, 200);
    }
}