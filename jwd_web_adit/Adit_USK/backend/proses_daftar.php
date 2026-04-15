<?php
include 'koneksi.php'; 

/*Tangkap semua data dari form HTML*/
$nama = $_POST['nama'];
$email = $_POST['email'];
$no_hp = $_POST['no_hp'];
$alamat = $_POST['alamat'];
$program = $_POST['program'];

/*Masukkan data tersebut ke dalam tabel pendaftaran*/
$query = "INSERT INTO pendaftaran (nama, email, no_hp, alamat, program) 
          VALUES ('$nama', '$email', '$no_hp', '$alamat', '$program')";

$simpan = mysqli_query($koneksi, $query);

/*Cek apakah berhasil disimpan atau tidak*/
if ($simpan) {
    /*Jika berhasil, munculkan pesan sukses dan kembalikan ke halaman utama*/
    echo "<script>alert('Pendaftaran Berhasil! Kami akan segera menghubungi Anda.'); window.location='../index.html';</script>";
} else {
    /*Jika gagal, munculkan pesan error dan kembalikan ke form pendaftaran*/
    echo "<script>alert('Gagal mengirim pendaftaran. Silakan coba lagi.'); window.location='../pendaftaran.html';</script>";
}
?>