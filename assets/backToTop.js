// script.js
const backToTopBtn = document.getElementById("backToTopBtn");

// Ketika pengguna menggulir ke bawah, tampilkan tombol
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.remove("hidden");
    } else {
        backToTopBtn.classList.add("hidden");
    }
};

// Ketika tombol diklik, gulir ke atas dengan animasi smooth
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
