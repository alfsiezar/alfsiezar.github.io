const animationDiv = document.querySelector('.animation');
const canvas = document.createElement('canvas');
canvas.width = animationDiv.clientWidth;
canvas.height = animationDiv.clientHeight;
animationDiv.appendChild(canvas);

const ctx = canvas.getContext('2d');
const numberOfBalls = 30; 
const speed = 5;
const maxDistance = 200; 

const balls = [];

window.addEventListener('resize', () => {
    canvas.width = animationDiv.clientWidth;
    canvas.height = animationDiv.clientHeight;
    clearBalls();
    if (canvas.width >= 800) {
        createBalls(30);
    }
    else createBalls(10);
});

function createBalls(numberOfBalls) {
    for (let i = 0; i < numberOfBalls; i++) {
        balls.push({
            x: getRandomPosition(canvas.width - 15),
            y: getRandomPosition(canvas.height - 15),
            dx: (Math.random() - 0.5) * speed,
            dy: (Math.random() - 0.5) * speed,
            color: getRandomColor(),
            radius: 10
        });
    }
}

function clearBalls() {
    balls.length = 0;
}

if (canvas.width >= 800) {
    createBalls(30);
}
else createBalls(10);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) ball.dx *= -1;
        if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) ball.dy *= -1;

        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    handleCollisions();
    requestAnimationFrame(update);
}

function drawLines() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const distance = getDistance(balls[i], balls[j]);
            if (distance < maxDistance) {
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.stroke();
            }
        }
    }
}

function handleCollisions() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const distance = getDistance(balls[i], balls[j]);
            if (distance < balls[i].radius + balls[j].radius) {
                resolveCollision(balls[i], balls[j]);
            }
        }
    }
}

function resolveCollision(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const collisionAngle = Math.atan2(dy, dx);

    const speed1 = Math.sqrt(ball1.dx * ball1.dx + ball1.dy * ball1.dy);
    const speed2 = Math.sqrt(ball2.dx * ball2.dx + ball2.dy * ball2.dy);

    const direction1 = Math.atan2(ball1.dy, ball1.dx);
    const direction2 = Math.atan2(ball2.dy, ball2.dx);

    const velocityX1 = speed1 * Math.cos(direction1 - collisionAngle);
    const velocityY1 = speed1 * Math.sin(direction1 - collisionAngle);
    const velocityX2 = speed2 * Math.cos(direction2 - collisionAngle);
    const velocityY2 = speed2 * Math.sin(direction2 - collisionAngle);

    const finalVelocityX1 = ((ball1.radius - ball2.radius) * velocityX1 + (ball2.radius + ball2.radius) * velocityX2) / (ball1.radius + ball2.radius);
    const finalVelocityX2 = ((ball1.radius + ball1.radius) * velocityX1 + (ball2.radius - ball1.radius) * velocityX2) / (ball1.radius + ball2.radius);

    ball1.dx = Math.cos(collisionAngle) * finalVelocityX1 + Math.cos(collisionAngle + Math.PI / 2) * velocityY1;
    ball1.dy = Math.sin(collisionAngle) * finalVelocityX1 + Math.sin(collisionAngle + Math.PI / 2) * velocityY1;
    ball2.dx = Math.cos(collisionAngle) * finalVelocityX2 + Math.cos(collisionAngle + Math.PI / 2) * velocityY2;
    ball2.dy = Math.sin(collisionAngle) * finalVelocityX2 + Math.sin(collisionAngle + Math.PI / 2) * velocityY2;
}

function getDistance(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * (max - 10) + 10);
}

update();
