export class Rectangle {
  constructor({
    x = 0,
    y = 0,
    width = 10,
    height = 10,
    velocityX = 0,
    velocityY = 0,
    gravity = 0,
    color = "black",
  }) {
    this.gravity = gravity;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
  }
  update(dt) {
    this.velocityY += this.gravity * dt;
    this.x += this.velocityX * dt;
    this.y += this.velocityY * dt;
  }
  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
