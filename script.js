document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

  
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {

        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(shape => {
                const speed = shape.getAttribute('data-speed');
                const x = (window.innerWidth - e.clientX * speed) / 100;
                const y = (window.innerHeight - e.clientY * speed) / 100;
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

     
        const card = document.getElementById('profile-card');
        const container = document.querySelector('.tilt-container');

        if(container && card) {
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
            });

            container.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                card.style.transition = 'transform 0.5s ease';
            });
            
            container.addEventListener('mouseenter', () => {
                card.style.transition = 'none';
            });
        }
    }

    
    anime({
        targets: '.hero-el',
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 1000,
        delay: anime.stagger(100, {start: 200})
    });

   
    anime({
        targets: '.hero-img',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 500
    });

    
    anime({
        targets: '.float-icon',
        translateY: [-8, 8],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 3000,
        delay: anime.stagger(1000)
    });

   
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


const facts = [
    "Suka banget aroma buku lama! 📚",
    "Hobi menata ulang rak buku di rumah.",
    "Pernah baca 5 novel dalam satu minggu.",
    "Suka kucing tapi takut dicakar. 🐱",
    "Cita-cita punya perpustakaan pribadi.",
    "Suka minum kopi sambil ngerjain tugas. ☕"
];

function generateFact() {
    const display = document.getElementById('fact-display');
    display.style.opacity = 0;
    
    setTimeout(() => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        display.innerText = randomFact;
        display.style.opacity = 1;
        anime({
            targets: '#fact-container',
            scale: [0.9, 1],
            duration: 400,
            easing: 'easeOutElastic(1, .8)'
        });
    }, 200);
}