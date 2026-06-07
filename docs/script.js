document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme toggle logic
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent-color)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border-color)';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('Portfolio site loaded successfully.');
});
