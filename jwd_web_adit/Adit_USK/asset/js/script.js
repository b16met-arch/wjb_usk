//togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slider Struktur Organisasi
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Pastikan elemen-elemen tersebut ada di halaman sebelum menjalankan script
if (track && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 270, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -270, behavior: "smooth" });
  });
}

const pesanForm = document.getElementById("pesanForm");

if (pesanForm) {
  pesanForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form reload halaman

    /*Mengambil nama dari input*/
    const nama = document.getElementById("nama").value;

    alert(
      `Terima kasih, ${nama}! Pesan Anda telah berhasil dikirim. Kami akan segera membalasnya.`,
    );

    /*Mengosongkan form kembali setelah dikirim*/
    pesanForm.reset();
  });
}

// Validasi Form Pendaftaran
const formDaftar = document.getElementById("formDaftar");

if (formDaftar) {
  formDaftar.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form langsung terkirim

    let isValid = true; // Status awal dianggap valid

    // 1. Validasi Nama
    const nama = document.getElementById("nama");
    const errNama = document.getElementById("err-nama");
    if (nama.value.trim() === "") {
      errNama.style.display = "block";
      isValid = false;
    } else {
      errNama.style.display = "none";
    }

    // 2. Validasi Email (Format Valid)
    const email = document.getElementById("email");
    const errEmail = document.getElementById("err-email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      errEmail.style.display = "block";
      isValid = false;
    } else {
      errEmail.style.display = "none";
    }

    // 3. Validasi No HP (Angka & 10-13 digit)
    const hp = document.getElementById("hp");
    const errHp = document.getElementById("err-hp");
    const hpRegex = /^[0-9]{10,13}$/;
    if (!hpRegex.test(hp.value)) {
      errHp.style.display = "block";
      isValid = false;
    } else {
      errHp.style.display = "none";
    }

    // 4. Validasi Alamat (Minimal 10 Karakter)
    const alamat = document.getElementById("alamat");
    const errAlamat = document.getElementById("err-alamat");
    if (alamat.value.trim().length < 10) {
      errAlamat.style.display = "block";
      isValid = false;
    } else {
      errAlamat.style.display = "none";
    }

    // 5. Validasi Program Dropdown
    const program = document.getElementById("program");
    const errProgram = document.getElementById("err-program");
    if (program.value === "") {
      errProgram.style.display = "block";
      isValid = false;
    } else {
      errProgram.style.display = "none";
    }

    // Jika form valid, lanjutkan pengiriman ke PHP
    if (isValid) {
      formDaftar.submit();
    }
  });
}
