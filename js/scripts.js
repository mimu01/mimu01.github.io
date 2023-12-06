/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// File JavaScript eksternal

// Hitungan waktu mundur
var endDate = new Date("December 19, 2023 23:59:59").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = endDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        // Mungkin tambahkan logika lain jika waktu sudah habis
    }
}, 1000);

// Aksi ketika tombol "Daftar Sekarang" diklik
document.getElementById("daftarButton").addEventListener("click", function() {
    // Tambahkan logika atau redirect ke halaman pendaftaran
    alert("Anda akan dialihkan ke halaman pendaftaran.");
});

// ... (JavaScript yang sebelumnya)

// Aksi ketika tombol "Daftar Sekarang" diklik
document.getElementById("daftarButton").addEventListener("click", function() {
    // Tambahkan logika atau redirect ke halaman pendaftaran
    alert("Anda akan dialihkan ke halaman pendaftaran.");
});

// Aksi ketika tombol "Lihat Tutorial" diklik
document.getElementById("tutorialButton").addEventListener("click", function() {
    // Tambahkan logika atau tautan untuk membuka video tutorial
    alert("Anda akan melihat tutorial cara daftar dan pengumpulan video.");
});
