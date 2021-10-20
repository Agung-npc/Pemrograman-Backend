<?php

  # membuat class Animal
  class Animal
  {
  # property animals
  public $animals;

  # method constructor - mengisi data awal
  # parameter: data hewan (array)
  public function __construct($data)
  {
    $this->animals = $data;
  }

  #menampilkan data animals
  public function index()
  {
    # gunakan foreach untuk menampilkan data animals (array)
    foreach ($this->animals as $value) {

      #echo
      echo $value."<br>";
    }
  }

  # method store - menambahkan hewan baru
  # parameter: hewan baru
  public function store($data)
  {
    # gunakan method array_push untuk menambahkan data baru
    array_push($this->animals, $data);
  }

  # method update - mengupdate hewan
  # parameter: index dan hewan baru
  public function update($index, $data)
  {
    $this->animals[$index] = $data;
  }

  # method delete - menghapus hewan
  # parameter: index
  public function destroy($index)
  {
  # gunakan method unset atau array_splice untuk menghapus data array
  array_splice($this->animals, $index, 2);
    
    }
  }

  # membuat object
  # kirimkan data hewan (array) ke constructor
  $animal = new Animal(['Gajah','Jerapah','Penguin']);

  echo "[Menampilkan seluruh hewan] <br>";
  $animal->index();
  echo "<br>";

  echo "[Menambahkan hewan baru] <br>";
  $animal->store('Kambing');
  $animal->store('Harimau');
  $animal->store('Anjing Laut');
  $animal->store('Serigala');
  $animal->index();
  echo "<br>";

  echo "[Mengupdate hewan] <br>";
  $animal->update(0, 'Kangguru');
  $animal->update(1, 'Badak');
  $animal->index();
  echo "<br>";

  echo "[Menghapus hewan] <br>";
  $animal->destroy(0);
  $animal->index();
  echo "<br>";
