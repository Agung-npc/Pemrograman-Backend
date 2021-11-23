<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
    {
    # property animals
    public $animals = ['Gajah', 'Jerapah', 'Penguin', 'Kucing'];

    public function index()
    {
    
    #  menampilkan data animals
        echo "Menampilkan data animals";
        return response() -> json($this->animals);
    }

    public function store(Request $request)
    {
    #  menambahkan hewan baru
    // echo "Menambahkan hewan baru - $request->nama";
        array_push($this->animals, $request->nama);
        return $this->index();
    }

    public function update(Request $request, $id)
    {
    #  mengubah data hewan
        // echo "Mengubah data hewan - id $id - $request->nama";
        $this->animals[$id] = $request->nama;
        return $this->index();
    }

    public function destroy($id)
    {
    #  menghapus data hewan
        // echo "Menghapus data hewan - id $id";
        unset($this->animals[$id]);
        return $this->index();

    //Untuk echo pada store, update dan destroy sebenarnya tidak diperlukan dan hanya diletakkan pada index saja
    
    }
}