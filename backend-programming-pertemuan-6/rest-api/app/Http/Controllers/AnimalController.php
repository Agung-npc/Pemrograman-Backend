<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // BUAT PROPERTI ANIMALS (ARRAY)
    public $animals = ['Ayam', 'Bebek', 'Cicak'];

    public function index()
    {
        // TAMPILKAN DATA ANIMALS
        echo "Menampilkan data animals";
        return response() -> json($this->animals);
    }

    public function store(Request $request)
    {
        // TAMBAHKAN HEWAN BARU
        // echo "Menambahkan hewan baru - $request->nama";
        array_push($this->animals, $request->nama);
        return $this->index();
    }

    public function update(Request $request, $id)
    {
        // UBAH HEWAN
        // echo "Mengubah data hewan - id $id - $request->nama";
        $this->animals[$id] = $request->nama;
        return $this->index();
    }

    public function destroy($id)
    {
        // HAPUS HEWAN
        // echo "Menghapus data hewan - id $id";
        unset($this->animals[$id]);
        return $this->index();
    }
}