import { Rectangle } from "./class/Confetti.js";

const canvas = document.getElementById("canvas-one");

const bounding = document.getElementById('header__container--title').getBoundingClientRect()
const CANVAS_WIDTH = bounding.left - ((bounding.width / 100) * 15);
const CANVAS_HEIGHT = ((document.getElementById('header__container--title').clientHeight / 3) * 2);

const dpr = devicePixelRatio;
canvas.width = CANVAS_WIDTH * devicePixelRatio;
canvas.height = CANVAS_HEIGHT * devicePixelRatio;

canvas.style.setProperty("width", CANVAS_WIDTH + "px");
canvas.style.setProperty("height", CANVAS_HEIGHT + "px");

const ctx = canvas.getContext("2d");

let GRAVITY = 90;
const RECTANGLES_COUNT = 100;
const rectangles = [];

for (let i = 0; i < RECTANGLES_COUNT; i++) {
  const radius = 3;
  rectangles.push(
    new Rectangle({
      gravity: GRAVITY,
      x: canvas.width,
      y: canvas.height,
      width: radius,
      height: radius,
      velocityX: 20 + (Math.random() - 1) * 150,
      velocityY: -Math.random() * 200 + 50,
      color: getRandomRGBColor(),
    })
  );
}
let oldTime = 0;
setTimeout(() => {
  requestAnimationFrame(drawFrame);
}, 600);

function drawFrame(ts) {
  ts /= 1000;
  const dt = ts - oldTime;
  oldTime = ts;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let i = rectangles.length;
  while (i--) {
    const rect = rectangles[i];
    rect.update(dt);
    rect.render(ctx);
  }
  requestAnimationFrame(drawFrame);
}

function getRandomRGBColor() {
  const randomR = Math.random() * 255;
  const randomG = Math.random() * 255;
  const randomB = Math.random() * 255;
  return `rgba(${randomR}, ${randomG}, ${randomB})`;
}
