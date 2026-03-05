
// Scroll effect for header opacity
window.addEventListener('scroll', function() {
    const header = document.getElementById('fixedHeader');
    const scrollPosition = window.scrollY;
    
// Calculate opacity based on scroll position
// Opacity range: 0.85 (start) to 0.98 (end)
    const opacity = Math.min(0.85 + (scrollPosition / 500) * 0.13, 0.98);
    header.style.backgroundColor = `rgba(252, 231, 255, ${opacity})`;
});

// Update active nav link based on scroll position
const sections = document.querySelectorAll('section, header, footer');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveLink() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Don't highlight anything if we're in footer
        if (current !== 'footer' && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);