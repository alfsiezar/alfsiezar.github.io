document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.fill');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    }

    function animateSkillBars() {
        skillBars.forEach(function(bar) {
            if (isElementInViewport(bar)) {
                bar.style.width = bar.style.maxWidth; // Start filling the bar
            }
        });
    }

    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('resize', animateSkillBars);

    // Initial check
    animateSkillBars();
});