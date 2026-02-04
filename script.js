document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Logika Mobile Menu ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu saat tombol diklik
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // --- 2. Animasi Loading (Anime.js) ---
    // Animasi elemen masuk saat halaman dibuka
    
    // Text Masuk
    anime({
        targets: '.hero-el',
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: anime.stagger(100, {start: 200})
    });

    // Gambar Masuk
    anime({
        targets: '.hero-img',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 500
    });

    // Floating Icons Naik Turun (Looping halus)
    anime({
        targets: '.float-icon',
        translateY: [-8, 8],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 3000,
        delay: anime.stagger(1000)
    });

    // Scroll Animation (Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    easing: 'easeOutCubic',
                    duration: 800,
                    delay: entry.target.classList.contains('about-card') ? anime.stagger(100) : 0
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .about-card').forEach(el => {
        observer.observe(el);
    });
});
