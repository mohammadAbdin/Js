const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");

let drawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (event) => {
  drawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", (event) => {
  if (!drawing) return;

  const currentX = event.offsetX;
  const currentY = event.offsetY;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(currentX, currentY);

  // Generate a random hue for each line segment
  const hue = Math.random() * 360;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

  [lastX, lastY] = [currentX, currentY];
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

canvas.addEventListener("mouseout", () => {
  drawing = false;
});
