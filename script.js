document.addEventListener('DOMContentLoaded', () => {

    /**
     * Feature 1: Custom cursor dot with hover effect
     */
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        const interactiveElements = document.querySelectorAll('a, .btn, .work-card');

        window.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    }


    /**
     * Feature 2: Fade-in animations on scroll (retained for polish)
     */
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05 // Start animation a bit earlier
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
