<?php

# MEMBUAT FUNGSI
function hitungLuasLingkaran($jari) {
    $phi = 3.14;
    $hasil = $phi * $jari * $jari;
    return $hasil;
}

# MEMANGGIL FUNGSI
echo hitungLuasLingkaran(6);
echo "<br>";
echo hitungLuasLingkaran(7);