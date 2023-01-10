(function () {
    'use strict';
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        // Check only top and bottom and consider the case that the post's height is longer than the window height
        return (rect.bottom - 100 > 0 && rect.top + 100 < (window.innerHeight || document.documentElement.clientHeight));
    }

    function callbackFunction() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunction);
    window.addEventListener("resize", callbackFunction);
    window.addEventListener("scroll", callbackFunction);


    // mendapatkan elemen .timeline__progressbar
    const progressBar = document.querySelector('.timeline__progressbar');

    // mendapatkan posisi scroll saat ini
    let currentScroll = window.pageYOffset;

    // mendapatkan tinggi dokumen
    const docHeight = document.body.offsetHeight;

    // mendapatkan tinggi jendela
    const windowHeight = window.innerHeight;

    // mendapatkan total jarak yang dapat di scroll
    const totalScroll = docHeight - windowHeight;

    // mengubah tinggi progress bar sesuai dengan jarak yang telah di scroll
    progressBar.style.height = (currentScroll / totalScroll) * 100 + '%';

    // menambahkan event listener untuk mengubah tinggi progress bar saat scroll
    window.addEventListener('scroll', () => {
        // mendapatkan posisi scroll saat ini
        currentScroll = window.pageYOffset;

        // mengubah tinggi progress bar sesuai dengan jarak yang telah di scroll
        progressBar.style.height = (currentScroll / totalScroll) * 100 + '%';
    });



})();