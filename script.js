
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let birdY = 150;
let velocity = 0;
let gravity = 0.6;
let isSpacePressed = false;

document.addEventListener('keydown', () => {
  velocity = -10;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Bird
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(50, birdY, 20, 0, Math.PI * 2);
  ctx.fill();

  birdY += velocity;
  velocity += gravity;

  if (birdY + 20 > canvas.height) {
    birdY = 150;
    velocity = 0;
    alert("Game Over!");
  }

  requestAnimationFrame(draw);
}

draw();
