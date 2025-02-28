// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Fade-In Animation on Scroll
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeIns.forEach(el => observer.observe(el));
