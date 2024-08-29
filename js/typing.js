document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector('.typing');
    const texts = [
        "a video game developer!",
        "a fullstack developer!",
        "an app developer!",
        "a gamer!"
    ];
    let currentIndex = 0;

    function startTypingAnimation() {
        typingElement.textContent = texts[currentIndex];
        typingElement.style.animation = 'typing 2s steps(30, end) 0s 1 normal both, blink 0.75s step-end infinite';
        
        setTimeout(() => {
            typingElement.style.animation = 'erase 2s steps(30, end) 0s 1 normal both, blink 0.75s step-end infinite';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                typingElement.style.animation = 'none'; // Reset animation
                typingElement.offsetHeight; // Trigger reflow
                startTypingAnimation(); // Restart animation
            }, 2000); // Duration of the erase animation
        }, 4000); // Duration of the typing animation
    }

    startTypingAnimation();
});