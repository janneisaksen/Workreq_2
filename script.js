
        // Scroll effect for header opacity
        window.addEventListener('scroll', function() {
            const header = document.getElementById('fixedHeader');
            const scrollPosition = window.scrollY;
            
            // Calculate opacity based on scroll position
            // Starts at 0.85, increases to 0.98 as you scroll
            const opacity = Math.min(0.85 + (scrollPosition / 500) * 0.13, 0.98);
            header.style.backgroundColor = `rgba(252, 231, 255, ${opacity})`;
        });

        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.nav-menu a');

        function updateActiveLink() {
            let current = '';
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink);
        window.addEventListener('load', updateActiveLink);