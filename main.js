document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !burger.contains(e.target)) {
        sideMenu.classList.remove('active');
        burger.classList.remove('active');
    }
});

const typewriterTexts = [
    "a Web Developer!",
    "a Game Developer!",
    "a Software Engineer!",
    "a Gamer!",
    "an AI Developer!",
    "a Husband!"
];

let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');
const cursorElement = document.querySelector('.cursor');

function typewriter() {
    const currentText = typewriterTexts[typewriterIndex];
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
            setTimeout(typewriter, 1000);
        } else {
            setTimeout(typewriter, 100);
        }
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typewriter, 1000);
        } else {
            setTimeout(typewriter, 200);
        }
    }
}

function blinkCursor() {
    cursorElement.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    typewriter();
    setInterval(blinkCursor, 500);
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.fill');
            const percentage = fill.getAttribute('data-percentage');
            fill.style.width = percentage;
        }
    });
});

document.querySelectorAll('.skill').forEach(skill => {
    observer.observe(skill);
});